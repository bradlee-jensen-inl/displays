--
-- PostgreSQL database dump
--

-- Dumped from database version 15.12
-- Dumped by pg_dump version 15.12

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: cluster; Type: TABLE; Schema: public; Owner: warehouse_role
--

CREATE TABLE public.cluster (
    id integer NOT NULL,
    name text NOT NULL,
    server text NOT NULL,
    accepted_on date,
    commissioned_on date,
    decommissioned_on date,
    scheduler text,
    made_public_on date
);


ALTER TABLE public.cluster OWNER TO warehouse_role;

--
-- Name: cluster_id_seq; Type: SEQUENCE; Schema: public; Owner: warehouse_role
--

CREATE SEQUENCE public.cluster_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.cluster_id_seq OWNER TO warehouse_role;

--
-- Name: cluster_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: warehouse_role
--

ALTER SEQUENCE public.cluster_id_seq OWNED BY public.cluster.id;


--
-- Name: cluster id; Type: DEFAULT; Schema: public; Owner: warehouse_role
--

ALTER TABLE ONLY public.cluster ALTER COLUMN id SET DEFAULT nextval('public.cluster_id_seq'::regclass);


--
-- Data for Name: cluster; Type: TABLE DATA; Schema: public; Owner: warehouse_role
--

COPY public.cluster (id, name, server, accepted_on, commissioned_on, decommissioned_on, scheduler, made_public_on) FROM stdin;
6	bechler	bechler	\N	2014-02-18	2020-10-19	pbs	\N
8	galena	galena	\N	2018-01-15	2020-10-19	pbs	\N
3	falcon	service2	2014-11-12	2014-11-12	2022-03-31	pbs	\N
4	eos	eos	\N	2012-04-18	2014-10-17	\N	\N
2	icestorm	service2-icestorm	\N	2008-02-01	2014-07-01	\N	\N
7	quark	quark	\N	2011-05-01	2014-04-13	\N	\N
5	fission	fpbs	2011-04-15	2011-04-15	2017-04-10	\N	\N
13	falconviz	falconviz	2003-07-26	2015-04-01	2023-05-26	\N	\N
12	viz	vizslurm	2021-03-11	2021-03-11	2023-12-01	slurm	\N
10	sawtooth	sawtoothpbs	2020-01-31	2019-12-01	\N	pbs	2020-03-17
11	hoodoo	hoodooslurm	2020-12-01	2020-12-01	\N	slurm	2021-02-02
14	bitterroot	brslurm	2024-04-16	2024-06-18	\N	slurm	2024-06-17
9	lemhi	lemhipbs	2018-10-18	2018-12-03	2025-01-02	pbs	2019-02-28
15	utility	N/A	\N	\N	\N	\N	\N
16	windriver	wrslurm	2025-01-01	2025-02-03	\N	slurm	2025-02-14
\.


--
-- Name: cluster_id_seq; Type: SEQUENCE SET; Schema: public; Owner: warehouse_role
--

SELECT pg_catalog.setval('public.cluster_id_seq', 16, true);


--
-- Name: cluster cluster_pkey; Type: CONSTRAINT; Schema: public; Owner: warehouse_role
--

ALTER TABLE ONLY public.cluster
    ADD CONSTRAINT cluster_pkey PRIMARY KEY (id);


--
-- Name: TABLE cluster; Type: ACL; Schema: public; Owner: warehouse_role
--

GRANT ALL ON TABLE public.cluster TO zap;
GRANT SELECT,REFERENCES,TRIGGER ON TABLE public.cluster TO warehouse_read;
GRANT SELECT ON TABLE public.cluster TO parksj2;
GRANT SELECT ON TABLE public.cluster TO kunzmr;
GRANT SELECT ON TABLE public.cluster TO hpcweb;
GRANT SELECT ON TABLE public.cluster TO wadsjc;
GRANT SELECT ON TABLE public.cluster TO evangj;
GRANT SELECT ON TABLE public.cluster TO johnnath;
GRANT SELECT ON TABLE public.cluster TO hpcutil;
GRANT SELECT ON TABLE public.cluster TO andematt;
GRANT SELECT ON TABLE public.cluster TO obfuscator;
GRANT SELECT ON TABLE public.cluster TO zohnpj;
GRANT SELECT ON TABLE public.cluster TO labrjp;
GRANT SELECT ON TABLE public.cluster TO grafana;
GRANT SELECT ON TABLE public.cluster TO norala;


--
-- Name: SEQUENCE cluster_id_seq; Type: ACL; Schema: public; Owner: warehouse_role
--

GRANT SELECT ON SEQUENCE public.cluster_id_seq TO hpcutil;
GRANT SELECT ON SEQUENCE public.cluster_id_seq TO hpcweb;


--
-- PostgreSQL database dump complete
--

