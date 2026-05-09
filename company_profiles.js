window.COMPANY_PROFILES = {
  "Airbnb": {
    "company": "Airbnb",
    "data_domain": "Two-sided marketplace for short-term lodging and experiences, with core data revolving around listings, hosts, guests, bookings, search/CTR, pricing, reviews, and trust/safety. Heavy emphasis on marketplace metrics, A/B experimentation, and growth funnels across geographies.",
    "data_stack": "Hive/Spark on S3 for batch compute, Airflow (open-sourced by Airbnb) for orchestration, Presto for interactive SQL, Apache Druid for low-latency OLAP, Apache Superset (open-sourced by Airbnb) for dashboards, Minerva as the central metrics platform with denormalized fact/dim tables, Bighead (ML platform) and Zipline (declarative feature engineering with point-in-time correctness) for ML, Knowledge Repo for shared analyses, and StarRocks for newer fast analytics.",
    "interview_difficulty": "Medium to hard. SQL screens are HackerRank-style and timed, with onsites pushing on ambiguity, edge cases, and analytical reasoning rather than just syntax.",
    "interview_style": "Interviews are scenario-driven and rooted in real Airbnb-style marketplace problems (bookings, listings, hosts, search). Interviewers care as much about how you frame the question, handle edge cases, and translate results into business insight as they do about the SQL itself.",
    "common_question_patterns": [
      "Window functions for ranking, running totals, and rolling averages (e.g., top-N listings per city, 7/28-day rolling bookings)",
      "CTEs to structure multi-step marketplace metric computations",
      "Self-joins and gaps-and-islands for consecutive booking nights, host streaks, or session stitching",
      "Funnel and conversion analysis (search -> click -> inquiry -> booking) with date-bounded cohorts",
      "Cohort retention and repeat-booking analysis using DATE_TRUNC and first-action joins",
      "Date-spine / calendar joins to handle vacant days, occupancy, and active-listing accounting",
      "Deduping, late-arriving records, and snapshot-vs-event reconciliation (point-in-time correctness)",
      "Aggregations with conditional logic (CASE WHEN), NULL handling, and ratio metrics like CTR or cancellation rate"
    ],
    "typical_table_themes": [
      "listings / listing_snapshot (listing_id, host_id, city_id, price, is_available, ds)",
      "bookings / booking_event (booking_id, guest_id, listing_id, created_at, check_in, check_out, status, total_amount)",
      "search and click events for CTR and ranking analyses",
      "reviews and ratings (rating, review_text, reviewer_id)",
      "users / hosts / guests with demographic and geographic dimensions",
      "experiment exposure and assignment tables joined to outcome metrics"
    ],
    "real_question_examples": [
      "Given bookings and listings tables, find the city with the most bookings in the past year and break it down by month.",
      "Compute the click-through rate for every listing in a given month (e.g., July 2022) using search impressions and click events.",
      "Find all listings in San Francisco and New York with at least 10 reviews and an average rating of 4.5 or higher.",
      "Given a daily listing_snapshot and a booking_event table, compute booked nights and average snapshot price at booking time, by city and day.",
      "Calculate average vacant days per active listing in a given year, accounting for listings that were not active the full year.",
      "Find matching host/guest pairs sharing characteristics such as gender and nationality, and count pairs per country.",
      "Compute a 7-day rolling average of bookings per city and rank cities by week-over-week growth.",
      "Identify the longest consecutive streak of nights a listing was booked (gaps-and-islands on check_in/check_out).",
      "Given a bookings table and a refunds table, compute net revenue per host and the refund rate per listing.",
      "Determine which gender of guest leaves higher average review scores, controlling for listing-level effects."
    ],
    "role_specific_notes": {
      "Data Analyst": "Heavy SQL screen plus a case study or take-home: pull the right metric, segment users, and explain the 'so what'. Expect to defend metric definitions (active listing, booked night, conversion) and tie answers back to marketplace health.",
      "Data Engineer": "Strongest SQL bar of the four roles. Multi-join queries on large fact tables, window functions, deduping, incremental ETL design, and reasoning about query plans/performance on Hive/Spark/Presto. Senior levels add data modeling and pipeline/system design (Airflow DAGs, schema evolution, late data).",
      "Product Analyst": "SQL is the entry ticket; the bar is on product sense and experimentation. Expect funnel/cohort/retention SQL paired with A/B test design, choice of north-star metrics, and trade-off discussions framed around host and guest behavior.",
      "ML Engineer": "Less SQL trivia than DA/DE, but expect SQL for building training datasets and features with point-in-time correctness (Zipline-style thinking). Focus is on feature engineering pipelines, online/offline consistency, model lifecycle, and ML system design for ranking, pricing, or trust use cases."
    }
  },
  "Amazon": {
    "company": "Amazon",
    "data_domain": "Global e-commerce, retail, advertising, devices, Prime Video, and AWS cloud services. Data work spans customer/order analytics, supply chain, marketplace seller behavior, ads attribution, and operational metrics across thousands of teams.",
    "data_stack": "Redshift is the dominant analytical warehouse; S3 as the data lake; AWS Glue and EMR (Spark) for ETL; Athena for ad-hoc queries on S3; DynamoDB for low-latency OLTP; QuickSight and internal BI tools (Andes, Cradle, internal Datanet) for dashboards. SQL dialect skews PostgreSQL/Redshift.",
    "interview_difficulty": "Medium to hard. SQL bar is high for analyst, BIE, and DE roles \u2014 multi-CTE queries with window functions are standard. Roughly 40-50% of the loop is technical and 50-60% is Leadership Principles (LPs).",
    "interview_style": "Structured loop of 4-5 rounds (~55-60 min each) after a recruiter screen and online assessment. Most rounds blend a technical question with 2-3 STAR-format LP questions; a 'bar raiser' is included. Interviewers push for optimization, edge cases, and the 'why' behind your query.",
    "common_question_patterns": [
      "Multi-table joins across customers/orders/products with GROUP BY + HAVING filtering",
      "Window functions: ROW_NUMBER/RANK/DENSE_RANK for top-N-per-group, LAG/LEAD for period-over-period comparisons",
      "Rolling/moving averages and cumulative sums using AVG/SUM OVER (ORDER BY ... ROWS BETWEEN ...)",
      "Self-joins for finding pairs, gaps, consecutive events, or matching dates between rows",
      "Cohort and retention analysis (first-purchase month, repeat-buyer rate, churn)",
      "Date/time bucketing \u2014 day/week/month aggregations, date_trunc, calendar gaps",
      "Deduplication and finding duplicates with ROW_NUMBER() or GROUP BY + COUNT > 1",
      "Funnel / conversion-rate queries across event tables (impression -> click -> purchase)"
    ],
    "typical_table_themes": [
      "Customers / users (signup date, country, segment)",
      "Orders, order_items, products (with price, category, marketplace)",
      "Sessions / clickstream / page-view events",
      "Reviews and star ratings",
      "Shipments, inventory, fulfillment center operations",
      "Ads / impressions / bids / campaigns"
    ],
    "real_question_examples": [
      "Given orders and customers tables, find customers whose total spend in the last 90 days exceeds $1000.",
      "Compute a 7-day rolling average of daily revenue per product, returning store_id, sale_date, sales, and rolling_avg.",
      "For each category, return the top 3 products by revenue last month (top-N-per-group with RANK or ROW_NUMBER).",
      "Find pairs of projects where one project's end_date equals another project's start_date (self-join with id ordering to dedupe).",
      "Calculate month-over-month percentage change in active users using LAG() over monthly aggregates.",
      "Given a reviews table, return the average star rating per product per month, rounded to 2 decimals, sorted by month then product_id.",
      "Identify duplicate rows in an orders table and write a query to keep only the most recent record per order_id.",
      "Compute the conversion rate from impression to purchase per campaign, handling users with multiple sessions.",
      "Find users who placed an order in 3 consecutive months (gaps-and-islands / consecutive-event pattern).",
      "Pivot a long-format sales table into a wide format by month, or unpivot wide to long."
    ],
    "role_specific_notes": {
      "Data Analyst": "SQL is the core gate \u2014 expect joins, aggregations, window functions, and a business-framing question ('what would you tell the PM?'). Heavy LP weighting, especially Customer Obsession, Dive Deep, and Bias for Action. Excel/QuickSight tasks (pivots, lookups) sometimes appear. Often interviewed under the Business Analyst or BIE job family.",
      "Data Engineer": "Roughly half SQL/coding, half system design + LPs. SQL deep dive covers complex window functions, top-K, rolling metrics, query optimization, and explaining query plans. Expect data modeling (star/snowflake, SCD types), ETL design with handling of late/messy data, idempotency, retries, and trade-off discussions across Redshift, S3, Spark/EMR, Glue, and Athena. Python/PySpark coding is common.",
      "Product Analyst": "Closest to Data Analyst / BIE loops at Amazon (the title 'Product Analyst' is less common than 'Business Analyst' or 'BIE'). Emphasis on product/metric sense \u2014 defining and diagnosing KPIs, A/B test reasoning, funnel analysis \u2014 paired with SQL on event/session data. Strong LP grounding in Customer Obsession, Ownership, and Are Right A Lot.",
      "ML Engineer": "SQL bar is lower than for DE/BIE but still tested for data-pull and feature-engineering scenarios (joins, aggregations, time-window features). Bulk of the loop is ML system design, coding (LeetCode medium/hard), ML fundamentals (precision/recall, ROC/AUC, calibration, train/serve skew), and LPs. Expect questions on building features from raw event tables and deduping/joining at scale."
    }
  },
  "Apple": {
    "company": "Apple",
    "data_domain": "Massive-scale consumer device, services, and platform analytics spanning iPhone/iPad/Mac telemetry, App Store, Apple Music, iCloud, Siri quality, AppleCare/support, retail, trade-in programs, and Apple Intelligence. Teams generate billions of events per day and operate under strict privacy/k-anonymity constraints.",
    "data_stack": "Heavily Spark-centric (Scala/PySpark) for batch and streaming, Hadoop/HDFS legacy storage, Kafka, Parquet, Hive/Presto-style SQL warehouses, Postgres and Redshift mentioned in candidate reports, Kubernetes for orchestration. Internal proprietary tools largely undocumented publicly.",
    "interview_difficulty": "Medium to hard. Glassdoor candidates rate the loop ~3.1-3.2/5 difficulty. SQL is medium-hard with multi-join, window-function, and sequencing logic; correctness and reasoning weighted over speed.",
    "interview_style": "Conversational and reasoning-driven: interviewers expect candidates to talk through logic step by step, validate against messy/imperfect data, and tie SQL to a product or business decision. Loops are team-specific (Apple has no monolithic process), so style varies by org but consistently mixes SQL, metric design, and stakeholder framing.",
    "common_question_patterns": [
      "Multi-table joins across users, devices, products, events, and transactions",
      "Window functions for ranking, running totals, and sequencing (LAG/LEAD, ROW_NUMBER, partitioned cumulative sums)",
      "Sequential event analysis (e.g., did event B follow event A within a window)",
      "Conversion-rate and funnel calculations broken down by product/segment",
      "Time-series aggregation by month/week with date filtering",
      "Deduplication and identifying the Nth occurrence of an event per user",
      "Metric definition and validation given ambiguous business prompts",
      "Debugging a query that returns unexpected results / data-quality reasoning"
    ],
    "typical_table_themes": [
      "Device sales, trade-ins, and product catalog (iPhone, AirPods, Mac)",
      "App Store events: searches, downloads, in-app purchases, reviews",
      "Apple Music / streaming listening events and song catalog",
      "iCloud storage usage and subscription tiers",
      "Siri voice interactions and quality/eval signals",
      "AppleCare / support ticket and customer-satisfaction data"
    ],
    "real_question_examples": [
      "Calculate the monthly average rating for each Apple product from a product reviews table",
      "What percentage of buyers purchased AirPods directly after buying an iPhone? (sequential purchase pattern)",
      "Compute add-to-bag conversion rate broken down by product_id from a clickstream table",
      "Total trade-in revenue per Apple Store, ordered descending",
      "Cumulative sales since the last restocking event per product (window functions partitioned by restocking)",
      "Find the third unique song each user listened to (rank + dedupe with window functions)",
      "Given users, devices, and storage_usage tables, compute average iCloud usage per device model",
      "Define a metric for App Store search quality and write the SQL to compute it daily",
      "Design a query to detect and flag duplicate or late-arriving events in a Siri eval pipeline",
      "Top-N products by revenue per region with a tie-breaker rule"
    ],
    "role_specific_notes": {
      "Data Analyst": "Strongest emphasis on SQL fluency plus dashboarding (Tableau commonly mentioned), KPI/metric design, and clear stakeholder communication. Prompts skew open-ended around App Store reviews, AppleCare backlogs, customer satisfaction, and device-quality signals; expected to walk through goal, data sources, SQL approach, validation, and impact.",
      "Data Engineer": "SQL is the backbone of every round and is medium-hard: multi-table joins, window functions, CTEs, pivot/unpivot, query optimization. Paired with Python, Spark, data modeling, schema design (including medallion bronze/silver/gold layouts), and pipeline/system design at scale. Expect questions on Parquet vs CSV, Postgres vs Redshift, Spark vs MapReduce.",
      "Product Analyst": "Heavy on metric definition, A/B-style reasoning, and product sense layered on SQL. Questions tie back to a specific product surface (App Store, Apple Music, Services) and ask candidates to translate ambiguous product questions into SQL plus a recommendation. Communication and structured framing matter as much as the query.",
      "ML Engineer": "SQL is lighter than for analyst/DE roles but still tested: joins, window functions, aggregations over large datasets, and feature-engineering-style queries to build training data. Bulk of the loop is coding (LeetCode-style, medium-hard), ML fundamentals, and ML system design for recommendations/personalization (App Store, Apple Music, Siri Suggestions, Apple Intelligence)."
    }
  },
  "DoorDash": {
    "company": "DoorDash",
    "data_domain": "Three-sided on-demand logistics marketplace connecting consumers, Dashers (couriers), and merchants. Core data revolves around orders, deliveries, dispatch/assignment, ETAs, promised vs. actual delivery times, marketplace health, incentives, and merchant performance.",
    "data_stack": "Snowflake (primary warehouse), Apache Kafka + Flink (Iguazu real-time event processing, ~hundreds of billions of events/day), Apache Spark (batch), Apache Airflow (orchestration), Cadence (workflow engine), Trino/Presto (lakehouse SQL), Apache Pinot (real-time OLAP), Delta/Iceberg on S3, Sigma (primary BI tool, ~12k internal users), Superset; Cassandra and Postgres for OLTP.",
    "interview_difficulty": "Medium to medium-hard. Glassdoor difficulty around 3.0-3.2/5. Onsite is typically 3-5 hours and demanding; SQL questions are practical (not trick questions) but layered, with multiple parts and emphasis on edge cases.",
    "interview_style": "Live shared-editor SQL on a realistic marketplace scenario. Interviewers expect candidates to clarify assumptions, decompose with CTEs, narrate tradeoffs, and connect the query result to a product or operational decision rather than just produce syntactically correct SQL.",
    "common_question_patterns": [
      "Time-based delivery performance: actual vs. promised/predicted delivery time, late-delivery rates, percentile latencies (p50/p90)",
      "Window functions for ranking and per-entity aggregation (ROW_NUMBER, RANK, NTILE, LAG/LEAD, FIRST_VALUE) over Dashers, merchants, or regions",
      "Cohort and retention analysis on new consumers (e.g., behavior in first 7/14/28 days after signup)",
      "First-event / first-order analysis per user or per merchant using self-joins or window functions",
      "Funnel and conversion logic across order lifecycle states (placed, confirmed, picked-up, delivered, cancelled)",
      "Time-bucketed aggregation: rush-hour vs. off-peak, day-of-week, region/zone-level rollups",
      "Top-N / bottom-N performers using NTILE or percentile bucketing (e.g., bottom 2% revenue restaurants)",
      "Multi-table joins across orders, deliveries, Dashers, merchants, and consumers with care for duplicate or canceled rows",
      "Percentage and ratio calculations with explicit casting and NULL handling for canceled/incomplete orders"
    ],
    "typical_table_themes": [
      "orders / order_details (order_id, consumer_id, merchant_id, placed_at, promised_delivery_time, actual_delivery_time, status, subtotal)",
      "deliveries / dispatch (delivery_id, order_id, dasher_id, assigned_at, picked_up_at, delivered_at, distance_miles)",
      "dashers / couriers (dasher_id, signup_date, region, active_status, ratings)",
      "merchants / restaurants (merchant_id, cuisine, region, onboarded_at, is_active)",
      "consumers / users (user_id, signup_date, region, first_order_date, lifetime_orders)",
      "events / experiment exposures (user_id, event_name, ts, experiment_variant) for A/B and funnel work"
    ],
    "real_question_examples": [
      "What percentage of orders are 'extremely late' (delivered more than 20 minutes after the promised delivery time), broken down by week?",
      "For each Dasher, compute their average delivery duration per day and rank their daily averages within their region.",
      "Find the bad-experience rate (cancellations + extreme lateness + low ratings) for new consumers in their first 14 days after signup.",
      "Identify each merchant's top 5 days by order volume and the share of those days' orders that were a customer's first-ever DoorDash order.",
      "Compute the 90th percentile gap between predicted ETA and actual delivery time, by city and hour-of-day.",
      "For each restaurant, return average delivery time and flag those whose average is more than 1 standard deviation above the city mean.",
      "Calculate average order value during rush hours (e.g., 5-8pm local) versus non-rush hours, per region.",
      "Bucket restaurants by NTILE(50) on monthly revenue and return the bottom 2% along with their order count and average rating.",
      "Find consumers whose second order happened within 7 days of their first, and compute that 'fast repeat' rate by acquisition channel.",
      "Given an order events table, reconstruct the lifecycle of each order and compute the median time spent in each state."
    ],
    "role_specific_notes": {
      "Data Analyst": "Heaviest SQL emphasis of the four roles. Expect 3-4 analytics SQL problems on a shared editor plus a product/case round. Strong focus on translating a vague business question (e.g., 'are deliveries getting slower?') into the right metric and the right query, then explaining results to a PM-style audience.",
      "Data Engineer": "SQL plus data modeling, pipeline design, and debugging. Questions probe schema design (often temporal/SCD-style problems like tracking address or merchant-status history with effective start/end timestamps), correctness under late-arriving or duplicate events, and tradeoffs in batch vs. streaming. Some loops include 4 SQL + 1 Python in the technical screen. Familiarity with Airflow, Snowflake, and Kafka/Flink concepts is a plus.",
      "Product Analyst": "SQL is the entry bar; the differentiator is product sense and experiment design. Expect SQL on marketplace metrics (order volume, retention, Dasher utilization, merchant activation) followed by case-style questions like 'how would you measure the impact of a 5% off delivery-fee coupon?' or 'how would you A/B test a new Dasher incentive given zone-level spillover?'. Guardrail metrics and three-sided marketplace tradeoffs come up frequently.",
      "ML Engineer": "SQL is a supporting skill, not the core focus. The loop weights ML system design (real-time inference, dispatch/ETA/ranking models, feedback loops, latency vs. accuracy tradeoffs), coding (algorithms/Python), and ML concepts. SQL appears in the form of feature engineering and offline analysis questions (e.g., build a training dataset from orders, deliveries, and Dasher events with point-in-time correctness)."
    }
  },
  "Google": {
    "company": "Google",
    "data_domain": "Massive-scale user behavior, search, advertising, and product engagement data across Search, Ads, YouTube, Maps, Android, and Cloud. Data volumes regularly hit billions to trillions of rows, requiring queries that summarize over pre-aggregated buckets rather than raw events.",
    "data_stack": "BigQuery (SQL dialect: GoogleSQL/standard SQL, with Dremel as the underlying execution engine on Colossus storage), Dataflow (Apache Beam) for batch and streaming, Pub/Sub for ingestion, Looker for BI, and a long history of internal tools (F1, Spanner, Mesa, Plx/Dasher); BigQuery ML appears in ML-adjacent roles.",
    "interview_difficulty": "Medium to medium-hard, ambiguity-heavy with a strong emphasis on communication and product reasoning over raw syntax tricks",
    "interview_style": "Google deliberately leaves SQL prompts ambiguous to test how candidates ask clarifying questions, frame assumptions, and translate vague product questions into queries; the bar is correct, efficient, well-explained SQL on realistic Google-scale schemas, often written live in a shared Google Doc with no autocomplete or syntax highlighting.",
    "common_question_patterns": [
      "Window functions for ranking, deduplication, and running aggregates (ROW_NUMBER, RANK, LAG/LEAD, moving averages with ROWS BETWEEN)",
      "Sessionization from raw event streams using LAG and cumulative SUM over time gaps",
      "Deduplication of event tables by a natural key, keeping the latest record by ingested_at/updated_at",
      "Computing product metrics from user-event tables: CTR, conversion rate, retention, funnel drop-off, ratio metrics across periods",
      "Aggregations over pre-bucketed/summary tables (e.g., computing a median when only frequency buckets are available)",
      "Multi-step CTEs to break a vague business question into staged transformations",
      "Self-joins and date-range joins for cohort, retention, and time-series comparisons",
      "Handling NULLs, edge cases, and divide-by-zero in ratio/conversion metrics"
    ],
    "typical_table_themes": [
      "Search queries and impressions (user_id, query_text, timestamp, is_ad_click)",
      "YouTube watch events, video metadata, and channel activity",
      "Google Ads / Shopping click and conversion logs (campaign_id, ad_group_id, cost, clicks)",
      "Gmail or Maps user activity and UGC (reviews, photos, tags)",
      "User accounts, sign-ups, and retention/cohort tables",
      "A/B experiment exposure and outcome tables"
    ],
    "real_question_examples": [
      "Given a summary table of (num_searches, num_users) buckets, compute the median number of searches per user rounded to one decimal \u2014 you cannot scan the trillions of raw rows.",
      "From a user_interactions table (user_id, query_text, timestamp, is_ad_click, ad_id), find users who frequently search a topic but rarely click the related sponsored ads.",
      "For Google Shopping ads, compute click-through rate and cart-conversion rate per ad, handling ads with zero impressions cleanly.",
      "Daily watch time per video_id over the last 7 days from a YouTube event stream, deduping by event_id and keeping the latest ingested_at.",
      "Sessionize a raw event log: assign session_ids per user where any gap of 30+ minutes starts a new session.",
      "Compute the ratio of January retention rate to December retention rate per account_id; if December has zero retained users, return 0 instead of NULL or an error.",
      "Funnel analysis on YouTube 'Watch Later': what fraction of users who add a video to Watch Later actually watch it within 7 days?",
      "Identify the top type of place on Google Maps that attracts the most user-generated content tagged as 'off-topic'.",
      "From a daily ad-spend log, compute average cost-per-click per campaign and ad_group, and flag campaigns whose CPC has risen >20% week-over-week.",
      "Find duplicate rows in a large dimension table using ROW_NUMBER() partitioned by the candidate key, and write the query that would safely remove them."
    ],
    "role_specific_notes": {
      "Data Analyst": "Heaviest emphasis on translating ambiguous product/business questions into SQL, defining the metric correctly, and explaining tradeoffs. Window functions, CTEs, NULL handling, and clean communication of results matter more than esoteric syntax. Expect a case-study feel with follow-ups on what the number means and what you'd recommend.",
      "Data Engineer": "Bar is non-trivial SQL on messy schemas at BigQuery scale: deduplication, sessionization, slowly-changing dimensions, partitioning/clustering awareness, and how relational concepts map to Dremel execution. SQL is paired with pipeline/system-design questions on Dataflow, Pub/Sub, and data quality contracts; query plans and cost-aware queries come up.",
      "Product Analyst": "Strongest focus on metric design and experimentation: retention, funnels, ratio metrics, cohort analysis, and A/B test readouts written in SQL. Interviewers probe definitions ('what counts as an active user?') and want fluent BigQuery syntax with clean window-function logic. Roughly half the loop is technical SQL, half is product/metrics judgment.",
      "ML Engineer": "SQL bar is moderate but real \u2014 joins, window functions, and aggregations to assemble training datasets and features. Expect questions about pulling labels from event logs, building point-in-time-correct feature tables, deduping, and avoiding leakage; BigQuery ML and feature-store-style preprocessing in SQL may appear. SQL is one round among DSA, ML coding, and ML system design."
    }
  },
  "Instacart": {
    "company": "Instacart",
    "data_domain": "Online grocery delivery operating a four-sided marketplace across customers, in-store/delivery shoppers, retailers, and CPG brands. Heavy analytics workload spans order economics, shopper logistics, inventory and item availability, search/recommendations, and Carrot Ads attribution and incrementality.",
    "data_stack": "Snowflake as the primary warehouse (10+ petabytes, 5M+ tables as of 2022), dbt as the standard transformation layer (instacart-dbt repo on GitHub), Apache Airflow on AWS ECS for orchestration, Python for data engineering and ML, Spark/Hadoop in the broader pipeline ecosystem, and BI tools like Tableau/Looker/Mode for analyst workflows.",
    "interview_difficulty": "Medium to Medium-Hard. Candidates report a structured loop (~2.8/5 self-rated difficulty for DE) with a heavy live-SQL component, plus a take-home that often runs ~5 hours of work spread over a longer window.",
    "interview_style": "SQL is tested both live (typically a 1-hour timed online or shared-editor session) and embedded in a take-home where candidates write end-to-end queries against a marketplace-style schema and justify metric definitions. Expect business-context framing tied to orders, shoppers, retailers, and ads rather than pure puzzle questions.",
    "common_question_patterns": [
      "Window functions for month-over-month or week-over-week growth on orders, GTV, and product sales",
      "Funnel/conversion math from impressions to clicks to cart-adds to checkout, including CTR and conversion rate per step",
      "User-level cohort and retention queries (first-order cohorts, repeat-purchase rates, monthly active customers)",
      "Top-N per group using ROW_NUMBER/RANK (top items per store, top retailers per region, top shoppers by completion rate)",
      "A/B test analysis: computing per-variant metrics, lift, and handling assignment vs. exposure with proper joins",
      "LEFT JOIN edge cases around optional dimensions like discounts, coupons, or ad attribution where rows must not be dropped",
      "Aggregations with HAVING and conditional CASE WHEN to define business segments (heavy users, churned users, basket-size tiers)",
      "Self-joins or date-spine joins to compute time-between-orders, order recency, or shopper batch sequencing"
    ],
    "typical_table_themes": [
      "orders and order_items (basket, quantity, unit price, discounts)",
      "users/customers and user_sessions (signup date, region, device)",
      "shoppers and shopper_batches (assignment, pick time, delivery time, completion)",
      "retailers and stores (location, banner, catalog mapping)",
      "items/products and inventory/availability snapshots",
      "ad impressions, clicks, and attributed conversions for Carrot Ads"
    ],
    "real_question_examples": [
      "For each month and each product, compute total orders, total product sales, and the month-over-month growth rate using window functions",
      "Find the top 10 most frequently ordered items overall, and the top 3 most-bought items per store",
      "Compute the average total order cost per user per month, including users who placed multiple orders",
      "Given a clicks table and a cart_additions table, compute click-through rate and click-to-cart conversion rate per surface",
      "For a Thanksgiving coupon experiment with 'incentive' and 'no-incentive' groups, compute redemption rate, orders per user, and GMV lift per variant",
      "Using orders and discounts tables, return every order with its discount amount (or zero) and the net revenue per order",
      "Identify customers whose order frequency dropped by more than 50% comparing the last 30 days to the prior 30 days",
      "Given a shopper_batches table, compute the median pick-to-deliver time per region and flag batches above the 95th percentile",
      "Design a star schema for a simplified Instacart OLTP model and write 3-4 queries answering business questions about it",
      "From ad impressions, clicks, and orders, compute attributed ROAS per brand within a 7-day post-click window"
    ],
    "role_specific_notes": {
      "Data Analyst": "Strongest emphasis on clean, correct SQL against marketplace schemas plus the ability to translate ambiguous business questions into the right metric. Expect funnel, retention, and basket-economics questions, and a take-home or live case where you must defend metric choices and call out data caveats.",
      "Data Engineer": "Live 1-hour SQL challenge plus a longer (~12 hour window) data processing/modeling take-home. Expect dimensional modeling on a simplified OLTP schema, query performance reasoning (Snowflake/dbt context helps), and Python plus warehouse/Spark fundamentals alongside SQL.",
      "Product Analyst": "Heaviest weighting on experimentation and metric design for a four-sided marketplace, where you must reason about customer, shopper, retailer, and brand trade-offs. Expect A/B test analysis SQL, guardrail/north-star metric definitions tied to GTV and retention, and root-cause investigation of metric movements.",
      "ML Engineer": "SQL is a supporting skill, not the headline. Queries typically focus on building training datasets, computing label/feature distributions, and sanity-checking model inputs (e.g., availability features, search relevance labels, recommendation engagement). Coding, ML system design, and applied ML concepts dominate the loop."
    }
  },
  "LinkedIn": {
    "company": "LinkedIn",
    "data_domain": "Professional networking and economic graph data: members, connections, job postings, applications, feed engagement, messaging, recruiter activity, premium subscriptions, learning, and ads. Reasoning frequently centers on the directed connection graph and time-series engagement events.",
    "data_stack": "Apache Kafka (invented at LinkedIn) for event streaming, Apache Samza for stream processing, Apache Pinot for real-time OLAP, Trino as the de-facto interactive query engine on the data lake, Spark for batch ETL, Hive/HDFS for warehousing, DataHub for data discovery and lineage, Venice/Voldemort for serving, and an internal text-to-SQL layer over Trino.",
    "interview_difficulty": "Medium to Medium-Hard. Heavy on window functions, CTEs, multi-table joins, and cohort/time-series logic. Conceptual SQL questions (LEFT vs RIGHT JOIN, correlated subqueries, DELETE vs TRUNCATE, stored procedures) appear alongside applied queries.",
    "interview_style": "Loop typically includes a timed SQL screen plus an analytics/product case where you propose metrics and write SQL to compute them. Interviewers value clear reasoning and clean, readable solutions over clever one-liners; they will ask you to narrate your logic and discuss optimization.",
    "common_question_patterns": [
      "Window functions for ranking, period-over-period, and latest-row-per-group (ROW_NUMBER, RANK, LAG/LEAD)",
      "Cohort and retention analysis from signup_date and event tables (e.g., N-day return, signup-to-conversion within X days)",
      "Multi-skill or multi-criteria filtering using GROUP BY with HAVING COUNT(DISTINCT ...) = N",
      "Self-joins on a connections/edges table to reason over the professional graph (mutual connections, 2nd-degree)",
      "Time-bucket aggregations (monthly active users, weekly job applications, daily feed impressions)",
      "Funnel and conversion rate queries across event types (impression -> click -> apply -> hire)",
      "Metric definition + SQL: propose a primary metric for a feature, then write the query that produces it",
      "Conceptual SQL: LEFT vs RIGHT JOIN with NULLs, correlated vs non-correlated subqueries, CTEs vs subqueries"
    ],
    "typical_table_themes": [
      "members / users (member_id, signup_date, country, premium_flag)",
      "connections (requester_id, receiver_id, status, accepted_at) - directed graph edges",
      "job_postings and job_applications (job_id, member_id, applied_at, status)",
      "feed_events and engagement (member_id, post_id, event_type, event_time)",
      "skills and member_skills (member_id, skill_name) for matching/filtering",
      "subscriptions / premium (member_id, plan, start_date, end_date)"
    ],
    "real_question_examples": [
      "Given members and connections tables, compute the average number of connections per member and the distribution by tenure bucket.",
      "Find candidates whose skill list contains all of Python, Tableau, and PostgreSQL (multi-skill HAVING pattern).",
      "From a job_applications table, compute the average number of applications per user per month, year over year.",
      "How would you measure engagement on LinkedIn Groups? Define primary and guardrail metrics, then write the SQL.",
      "For each post, return the member who generated the most reactions and their rank vs other engagers (window function).",
      "Identify members who logged in at least 3 times in their first 7 days after signup (cohort + HAVING).",
      "Investigate a sudden drop in feed CTR last week: write SQL to break it down by surface, country, and member segment.",
      "Compute 7-day rolling DAU and WAU/MAU stickiness for the messaging product.",
      "Given posts and post_views, find the top 5 posts per company by views in the last 30 days (PARTITION BY company ORDER BY views).",
      "Design an A/B test for a feed ranking change to lift comments per session; write the SQL to compute the lift and statistical sample sizes."
    ],
    "role_specific_notes": {
      "Data Analyst": "Emphasis on translating business questions into clear SQL using simple, business-oriented schemas. Two to three SQL tasks plus a metrics/dashboard discussion. Communication and storytelling are explicitly valued; expect to defend your metric choices and walk through query logic step by step.",
      "Data Engineer": "Multi-round loop (DSA + SQL phone screen, then onsite covering advanced SQL, data modeling/architecture, statistics, and DSA). Expect window functions, deduplication, cohorting, and Presto/Hive optimization (partition pruning, CTEs). Pipeline/system design with Kafka, Spark, and warehousing concepts is core.",
      "Product Analyst": "Strong product sense plus SQL. Three question buckets: metric design (e.g., engagement on Groups), root-cause analysis of metric movements, and A/B test design and readout. Multi-step case studies where you propose metrics and then write the SQL to produce them; sometimes asked to switch to Python/R for manipulation.",
      "ML Engineer": "SQL is lighter than for analyst roles but still tested for feature extraction and dataset construction (joins, aggregations, time-windowed features over member events). Larger weight on coding/DSA, ML system design, and modeling fundamentals; clean, readable SQL is preferred over puzzle-style queries."
    }
  },
  "Lyft": {
    "company": "Lyft",
    "data_domain": "On-demand rideshare marketplace generating high-volume event data across riders, drivers, trips, pricing, ETAs, and geospatial dispatch. Analytics center on marketplace balance, surge/prime-time pricing, ride matching, driver supply, ETA accuracy, and incentive/promo effectiveness.",
    "data_stack": "Python and SQL are primary interview languages. Warehouse on Trino/Presto over a multi-PB S3 data lake; streaming with Kafka and Flink; batch processing with Apache Spark (often on Kubernetes via LyftLearn for ML). Workflow orchestration with Flyte (open-sourced by Lyft) alongside Airflow. Amundsen (also built and open-sourced at Lyft) for data discovery, lineage, and metadata. Hive Metastore underpins table catalogs.",
    "interview_difficulty": "Medium overall (Glassdoor self-reports ~2.8/5). SQL screen tends to be medium, but onsite rounds add window-function-heavy and metric-definition problems that get harder; ML and DE loops add system design.",
    "interview_style": "Practical, business-framed SQL on rideshare-shaped tables (rides, drivers, riders, ratings, payments). Interviewers care as much about how you define a metric (completion rate, churn, VIP, trusted driver) and clarify ambiguity as the syntax itself, and they often follow up with a product or experimentation question.",
    "common_question_patterns": [
      "Ratio/rate metrics with conditional aggregation (completion rate, cancellation rate, acceptance rate) using SUM(CASE WHEN...) / COUNT(*)",
      "Window functions for ranking, running totals, and period-over-period comparisons (ROW_NUMBER, RANK, LAG, LEAD, SUM OVER)",
      "First-event / nth-event problems (first trip completion, first ride per user, time-to-first-ride) using ROW_NUMBER partitioned by user",
      "Cohort and retention analysis: bucket users by signup week/month then compute return rates over subsequent periods",
      "Self-joins and date-difference logic to find consecutive activity (rides on back-to-back days, gaps in driver activity)",
      "Threshold-based segmentation (define a 'VIP rider' or 'trusted driver' with rules on count + revenue + rating, then list/compute on the segment)",
      "Funnel analysis across event tables (request -> match -> pickup -> dropoff) with conversion at each step",
      "Time-bucketed aggregations and rolling windows (monthly average rating for trusted drivers, 7-day rolling rides)",
      "Marketplace metrics requiring joining supply (drivers online) and demand (ride requests) at the same time/region grain"
    ],
    "typical_table_themes": [
      "rides / trips (ride_id, rider_id, driver_id, request_ts, pickup_ts, dropoff_ts, status, fare, city)",
      "drivers (driver_id, signup_date, city, status, ban flags)",
      "riders / users (user_id, signup_date, city, segment)",
      "ratings / reviews (ride_id, rating, review_ts)",
      "payments / promos (ride_id, fare, tip, discount, payment_method)",
      "events / sessions (request, accept, cancel, complete with timestamps and reason codes)"
    ],
    "real_question_examples": [
      "Compute the daily ride completion rate (completed rides / requested rides) for the last 30 days, by city.",
      "Find the driver with the highest cancellation rate among drivers with at least 50 completed rides in the last quarter.",
      "Identify 'VIP' riders defined as having taken at least 50 rides AND spent at least $500 in the last 6 months; return user_id, name, total spend.",
      "For each day, return the new rider_ids that appear in rides for the first time (no prior ride history).",
      "Find riders who took rides on two consecutive calendar days; return rider_id and the date pairs.",
      "Compute the monthly average rating received by 'trusted' drivers, where trusted = at least 100 lifetime reviews.",
      "Given a driver's ride log for one day, find the longest idle gap between consecutive rides.",
      "Compute the percent of new riders whose first requested ride was successfully completed (first-trip completion rate).",
      "For each rider, return their 1st, 2nd, and 3rd ride (ride_id and timestamps) using window functions.",
      "Bucket riders by signup month and compute their week-1, week-2, week-4 return rates."
    ],
    "role_specific_notes": {
      "Data Analyst": "Most SQL-heavy of the four. Expect a 30-45 min live SQL screen with 2-3 questions ranging easy to hard, plus a case-study round where you define metrics for a rideshare scenario, write the query, and explain trade-offs. Communication of analytical reasoning is graded.",
      "Data Engineer": "SQL is necessary but not the differentiator: expect data modeling, warehouse design, schema/normalization, and pipeline/system design questions alongside SQL. Comfort with batch (Spark) and streaming concepts (Kafka/Flink) and orchestration (Flyte/Airflow) is valuable. SQL questions skew toward joins, performance, and window functions over large event tables.",
      "Product Analyst": "Tightly coupled SQL + product sense. Questions are framed as 'how would you measure X for the marketplace' (e.g., success of Prime Time, impact of a driver incentive, churn definition), then you write the SQL. A/B test design and metric trade-offs come up alongside the query. Take-home challenges using rideshare-style data are common.",
      "ML Engineer": "Lightest SQL bar of the four but still expected: joins, aggregations, and window functions for building features and slicing model performance. The loop is dominated by Python, ML system design (real-time inference, feature stores, model deployment at scale), and ML fundamentals; SQL questions are usually applied (e.g., constructing a training set or computing a label) rather than puzzle-style."
    }
  },
  "Meta": {
    "company": "Meta",
    "data_domain": "Massive-scale social platform data spanning Facebook, Instagram, WhatsApp, Messenger, and Reality Labs \u2014 user activity events, posts, likes, shares, friend graphs, ad impressions/clicks, sessions, and notification deliveries logged at petabyte/exabyte scale. Heavy emphasis on engagement metrics, retention cohorts, A/B experiment results, and graph/network relationships.",
    "data_stack": "Presto (primary interactive SQL engine), Spark (heavy joins / memory-bound jobs), Hive tables with internal ORC fork (warehouse storage, partitioned by ds), Scuba (real-time event analytics), Daiquery (web notebook front-end to all data sources), Bento (managed Jupyter), Unidash (dashboards), Dataswarm (pipeline orchestrator, Airflow predecessor), UPM (SQL static analysis for dependency inference), CDM (pipeline monitoring UI). SQL is the dominant business-logic language, wrapped in Python for orchestration.",
    "interview_difficulty": "Medium to hard. Technical screens are timed and dense (5 SQL + 5 Python questions in ~60 min for DE), and onsite SQL trends harder with multi-step CTEs, window functions, and product-metric reasoning combined.",
    "interview_style": "Real-world product analytics framed around Meta surfaces \u2014 questions look like 'compute DAU/WAU/MAU', 'find power users', 'compute Day-N retention for a cohort'. Interviewers care as much about how you decompose the problem and choose the right join/aggregation strategy as about syntax, and will probe edge cases (NULLs, duplicates, ties, missing dates).",
    "common_question_patterns": [
      "Multi-step CTE pipelines that build a metric incrementally (filter \u2192 aggregate \u2192 rank \u2192 final select)",
      "Window functions: ROW_NUMBER, RANK, DENSE_RANK, LAG/LEAD for top-N-per-group, period-over-period, and gap-and-island patterns",
      "GROUP BY with HAVING to filter aggregated cohorts (e.g. users with >= N actions)",
      "Cohort retention and DAU/WAU/MAU with self-joins or date-spine joins on activity tables",
      "Funnel and conversion-rate calculations using conditional aggregation (CASE WHEN inside SUM/AVG)",
      "Date arithmetic \u2014 days between first/last action, consecutive-day streaks, week/month bucketing with date_trunc",
      "LEFT JOIN + COALESCE / NULL handling to avoid silently dropping zero-activity cohorts",
      "Self-joins on a single events or friends table for graph-style problems (friends-of-friends, mutual connections)"
    ],
    "typical_table_themes": [
      "users / accounts (id, signup_date, country, age)",
      "posts and post_interactions (likes, comments, shares, reactions)",
      "sessions / activity_log / pageviews (user_id, event_ts, surface)",
      "friends / connections edge tables for the social graph",
      "events / event_attendees for hosting and RSVP problems",
      "ads_impressions, ads_clicks, conversions for ad/marketplace flows",
      "messages / threads for messaging-product questions"
    ],
    "real_question_examples": [
      "Given a posts table, find the number of days between each user's first and last post of the year, only for users who posted at least twice.",
      "From a pageviews table (user_id, view_ts, url), find users who viewed at least 5 distinct URLs per day for 3 consecutive days, returning the first qualifying start date.",
      "For each weekly signup cohort, compute Day-7 retention (% of cohort users who had any session 7 days after signup).",
      "Given posts and reactions, find the top 10 power users ranked by total likes received on their posts in the last 30 days.",
      "Compare year-over-year active users for the past 5 years using LAG() and a date-bucketed CTE.",
      "From a friends table, recommend friends-of-friends who attended at least one event in common with the target user but are not yet friends.",
      "Calculate click-through rate per ad campaign with proper handling of impressions that have zero clicks (LEFT JOIN, not INNER).",
      "Given a checkouts/library-style table, find users who failed to return an item before the due date and rank them by overdue days.",
      "Compute the share of users who have not posted this year, broken out by country.",
      "From an A/B experiment exposure table and a conversions table, compute lift in conversion rate per variant with proper de-duplication of users."
    ],
    "role_specific_notes": {
      "Data Analyst": "SQL is the heaviest weighted technical skill. Expect 2 medium SQL problems in CoderPad during the technical screen plus more SQL in the onsite. Strong emphasis on translating an ambiguous business question into the right metric, picking the right grain, and explaining the result to a non-technical PM. Window functions, CTEs, and join logic for product metrics are required.",
      "Data Engineer": "Most SQL-heavy of the four. Technical screen is 5 SQL + 5 Python in ~60 min on CoderPad \u2014 must pass at least 3 in each language to advance. Onsite adds data modeling (fact/dim, partitioning, schema for an analytics warehouse), pipeline design (Dataswarm-style orchestration, idempotency, backfills), and performance-aware SQL on Hive/Presto-scale data. Expect questions framed around real products like ride-sharing, ecommerce, or notifications.",
      "Product Analyst": "SQL screen is typically lighter than DE \u2014 joins, filters, aggregations, often without ranking/window functions in the first round, but harder SQL appears in the onsite. The bigger bar is product sense: defining the right metric, designing the experiment, interpreting messy instrumentation, and structuring trade-offs. Interviewers want structured thinking and many hypotheses, not perfect answers.",
      "ML Engineer": "SQL shows up mainly in the data-prep and feature-engineering portions of ML coding and ML system design rounds \u2014 pulling labeled training data, computing features (counts, rates, time-decayed signals), normalizing/bucketing, and joining user/content/interaction tables at scale. Pure SQL screens are less central than for DA/DE/PA; the heavier weight is ML coding, ML system design (training pipelines, feature stores, serving), and ML breadth."
    }
  },
  "Microsoft": {
    "company": "Microsoft",
    "data_domain": "Massive multi-product surface area spanning enterprise cloud (Azure), productivity (Microsoft 365, Teams, Outlook, Copilot), gaming (Xbox, Game Pass), search/ads (Bing), developer tools (GitHub), and LinkedIn. Most data work centers on telemetry, subscription/usage funnels, and experimentation across billion-user products.",
    "data_stack": "Azure SQL / Synapse Analytics (T-SQL, MPP dedicated SQL pools), Azure Data Lake Storage Gen2, Azure Data Factory, Azure Databricks (Spark SQL), Cosmos DB, Microsoft Fabric (newer unified analytics SaaS), Kusto / Azure Data Explorer with KQL for telemetry and logs, Power BI for BI/reporting. Internal tools like Cosmos (the legacy big-data system, distinct from Cosmos DB) and Scope/U-SQL still surface in some teams.",
    "interview_difficulty": "Moderate; commonly rated ~2.6-2.9 / 5 on Glassdoor for analyst roles. SQL questions trend medium difficulty rather than LeetCode-Hard, but bar raises sharply for Data Engineer and Applied Scientist loops where system design and Spark/KQL come into play.",
    "interview_style": "Live shared-screen coding (sometimes whiteboard-style without execution) with conversational follow-ups on edge cases, performance, and how the query would scale to telemetry-sized data. Each org (Azure, M365, Xbox, Bing, LinkedIn) tunes the loop independently, so style varies more across teams than at most FAANGs.",
    "common_question_patterns": [
      "Window functions: ROW_NUMBER / RANK / DENSE_RANK for top-N-per-group (top senders, top products, top users per region)",
      "LAG / LEAD for period-over-period comparisons (DAU change, month-over-month subscription growth, retention deltas)",
      "Multi-table joins on a fact + dimension star schema (downloads/events fact joined to user and account dimensions)",
      "Conditional aggregation with CASE WHEN inside SUM/COUNT (paying vs. free, A vs. B variant, churned vs. retained)",
      "CTEs to stage intermediate results, including recursive CTEs for org hierarchies or session stitching",
      "Date bucketing and cohort/retention math (N-day retention, DAU/MAU, rolling windows)",
      "Deduplication and 'pair' problems (sender/receiver pairs, distinct user-item interactions, ordering canonicalization)",
      "Funnel and conversion-rate questions: from impression to click to purchase / subscription",
      "Performance reasoning: when to use CTE vs. temp table, INNER vs. LEFT JOIN cost, indexing, partitioning, and MPP distribution keys for Synapse"
    ],
    "typical_table_themes": [
      "Subscription / licensing (Microsoft 365, Game Pass, Azure subscriptions): users, accounts, plans, billing periods",
      "Product telemetry and events: app launches, feature usage, sessions, errors (often modeled like Kusto telemetry)",
      "Messaging and collaboration: Teams messages, Outlook emails, meetings (sender_id, recipient_id, timestamp)",
      "Search and ads: Bing queries, impressions, clicks, advertisers, campaigns",
      "Xbox / gaming: players, titles, sessions, achievements, Game Pass subscriptions and churn",
      "Cloud usage: Azure resource consumption, regions, customers, SKUs"
    ],
    "real_question_examples": [
      "Find the top 2 senders by message count in Microsoft Teams for a given month, breaking ties deterministically.",
      "Compute the mean, median, and mode of emails sent per user from an Outlook events table.",
      "For paying vs. non-paying users, return total downloads per day and only include days where free-tier downloads exceeded paid downloads.",
      "Identify 'power users' who made more than 10 software purchases in the last 30 days.",
      "From a Sales table, return product-level revenue where product_type = 'software', year > 2015, and region <> 'Europe'; rank products within each region.",
      "Given Game Pass subscription events (start, cancel, renew), compute monthly churn rate and 30-day retention.",
      "Given Azure resource usage events, compute month-over-month growth in compute hours per customer using LAG.",
      "Deduplicate a table of (user_a, user_b) interaction pairs so that (1,2) and (2,1) count once, then rank users by total distinct partners.",
      "Build a click-through funnel from a Bing impressions/clicks/conversions schema and compute step-to-step conversion rates.",
      "Explain the difference between RANK, DENSE_RANK, and ROW_NUMBER, then rewrite a top-N-per-group query using each."
    ],
    "role_specific_notes": {
      "Data Analyst": "Heaviest pure-SQL emphasis of the four roles. Expect joins, aggregations, window functions, and a business case study at the end. Power BI familiarity (DAX, modeling) is a strong plus, especially for M365 / Finance / Marketing analytics teams. Communication of insight to non-technical stakeholders is explicitly evaluated.",
      "Data Engineer": "SQL is necessary but not sufficient: expect Spark SQL on Databricks, T-SQL on Synapse with awareness of distribution / partition keys and MPP, ADF pipeline design, slowly-changing dimensions, and at least conversational Cosmos DB (partition keys, RUs, consistency levels). Senior loops add system design (build a scalable pipeline for telemetry, design a data lake medallion architecture). Some org-specific teams (security, observability, M365 telemetry) test KQL on Azure Data Explorer.",
      "Product Analyst": "SQL plus product-sense and experimentation. Questions are usually framed inside a real product (Office 365 feature launch, Azure subscription growth, Xbox Game Pass churn, LinkedIn-style engagement) and ask you to define metrics, design an A/B test, then write the SQL to compute the metric. Strong candidates separate leading vs. lagging indicators and reason about novelty effects, segmentation, and guardrail metrics.",
      "ML Engineer": "SQL is screening-level rather than the main bar: enough to pull, join, and aggregate features from a warehouse (window functions, CTEs, time-bucketed aggregations for feature engineering). Most of the loop is Python / coding, ML system design (training pipelines, online vs. batch features, model serving on Azure ML), and applied ML depth. Applied Scientist loops add experimentation and metric-design rounds that look similar to the Product Analyst SQL bar."
    }
  },
  "Netflix": {
    "company": "Netflix",
    "data_domain": "Streaming entertainment platform with global membership, viewing/playback telemetry, content metadata, recommendations, and large-scale A/B experimentation. SQL work centers on member engagement, viewing sessions, content performance, and experiment readouts.",
    "data_stack": "Apache Iceberg on S3 (lakehouse), Trino (interactive SQL on Iceberg, 15+ clusters, 10M+ queries/month), Apache Spark (batch ETL, SQL/Python/Scala), Apache Druid (real-time analytics), Apache Flink + Kafka (streaming), Maestro (workflow orchestration), Atlas (metrics/telemetry), and an internal big-data UI fronting Spark/Trino/Druid/Snowflake. Netflix's XP experimentation platform generates dynamic SQL for metric computation.",
    "interview_difficulty": "Hard. Glassdoor difficulty around 3.5/5. Bar is high on SQL correctness AND clear reasoning at scale; weak SQL (messy joins, sloppy aggregation) is a frequent reject reason.",
    "interview_style": "Conversational and senior-leaning: interviewers expect you to think out loud, justify trade-offs, and treat SQL as a tool for business/product decisions rather than a puzzle. Expect at least one heavy SQL round in every data loop, often paired with a follow-up about scale, optimization, or how the result would be used.",
    "common_question_patterns": [
      "Window functions for ranking, running totals, and rolling retention (ROW_NUMBER, RANK, LAG/LEAD, SUM OVER)",
      "Sessionization of viewing/playback events using LAG and time-gap thresholds",
      "Cohort and N-day retention analysis on member sign-up and activity tables",
      "Top-N per group (top shows per country/genre, top users per month) with ties handled cleanly",
      "Self-joins and date-range joins to compare current vs. prior period engagement",
      "A/B test readouts: aggregating per treatment arm, computing lift, handling guardrail metrics",
      "Funnel / drop-off analysis across browse -> click -> play -> complete events",
      "Query optimization discussion: partition pruning, predicate pushdown, avoiding full scans on Iceberg/Trino-scale tables"
    ],
    "typical_table_themes": [
      "Members / subscriptions (member_id, country, plan, signup_date, status)",
      "Viewing activity / playback sessions (member_id, title_id, start_ts, end_ts, duration, device)",
      "Title / content metadata (title_id, type, genre, release_date, country_of_origin)",
      "A/B test assignments and exposures (member_id, experiment_id, variant, assigned_ts)",
      "Engagement events / impressions (member_id, surface, action, event_ts)",
      "Ratings or thumbs feedback (member_id, title_id, rating, rated_at)"
    ],
    "real_question_examples": [
      "Find the top 10 members by hours watched in the last 30 days; break ties deterministically.",
      "For each title, compute average daily viewing hours by month and rank titles within each month.",
      "Sessionize raw playback events into viewing sessions: a new session starts when the gap between events for the same member exceeds 30 minutes; return session_id, start, end, total minutes.",
      "Given an A/B test exposure table and a viewing table, compute hours-per-member for each variant in the 14 days after first exposure, including members who never watched.",
      "Calculate 7-day and 28-day rolling retention for members who signed up in a given month.",
      "For each country, find titles whose share of total viewing in that country exceeds 5% in the trailing week.",
      "Identify members who watched at least 3 episodes of a given series within 7 days of starting it (binge definition).",
      "Build a funnel from homepage impression -> title page view -> play -> >2 minutes watched, returning conversion at each step by device type.",
      "Detect anomalies in daily streaming hours per region using a rolling mean and standard deviation window.",
      "Given a slow Trino query on an Iceberg table partitioned by date and country, walk through how you would diagnose and rewrite it."
    ],
    "role_specific_notes": {
      "Data Analyst": "SQL-heavy with a business-question framing. Expect scenario problems on viewing trends, content performance, and member engagement, plus communication of findings (memo-style explanation, choosing the right metric). Window functions, multi-step CTEs, and cohort analysis are core.",
      "Data Engineer": "Expect at least one rigorous SQL round plus data modeling and pipeline design. Heavy on advanced joins, window functions, query optimization at Trino/Spark scale, star vs. snowflake schema reasoning, and how you would build and partition the underlying table you are querying. Python (or Scala) and ETL/ELT design follow the SQL round.",
      "Product Analyst": "SQL is the entry point to the real focus: experimentation and causal inference. Expect to compute lift, define primary and guardrail metrics from raw event tables, reason about interference and bias, and translate ambiguous product questions ('did the new homepage row work?') into SQL plus a defensible analysis plan.",
      "ML Engineer": "Lighter SQL relative to DA/PA, but it is still a gating skill \u2014 featured in feature engineering and dataset construction questions. Expect SQL for assembling training tables, joining behavioral signals to labels, time-correct joins (avoiding label leakage), and computing offline evaluation slices. The bulk of the loop is ML system design, coding, and modeling, but sloppy SQL on the data step is a known reject signal."
    }
  },
  "PayPal": {
    "company": "PayPal",
    "data_domain": "Global digital payments processing transactions across PayPal, Venmo, Braintree, and Xoom, with heavy focus on fraud/risk detection, merchant analytics, checkout conversion, dispute/chargeback handling, and cross-border money movement at massive scale (hundreds of billions of SQL queries processed per day across petabyte-scale transaction history).",
    "data_stack": "Google BigQuery (post-2024 migration from Teradata, ~300+ PB), Hadoop/Spark (PySpark on Dataproc), Apache Airflow for orchestration, Kafka for streaming, Java + Python for backend/pipelines, Looker/Tableau for BI, MySQL/PostgreSQL operationally, MongoDB for some services, GCP-centric ML tooling (Vertex AI, BigQuery ML).",
    "interview_difficulty": "Medium to medium-hard for SQL \u2014 moderately challenging, scenario-driven, business-context heavy. Less LeetCode-puzzle, more 'reason through messy payments data and edge cases.'",
    "interview_style": "SQL screens are scenario-based and tied directly to PayPal flows (transactions, authorizations, disputes, fraud, merchant funnels). Expect a shared text doc with no autocomplete; interviewers probe how you handle NULLs, time-window logic, duplicates, and how you'd validate the output against business reality.",
    "common_question_patterns": [
      "Window functions partitioned by user/merchant/account ordered by timestamp (ranking, lag/lead for adjacent transactions, rolling sums)",
      "Multi-table joins across users, transactions, merchants, accounts, and dispute/chargeback tables",
      "Aggregations with GROUP BY + HAVING for cohort filtering (e.g., users above a threshold, merchants meeting criteria)",
      "Time-series and event-based metrics: monthly active users, monthly transaction volume, day-over-day or week-over-week comparisons via DATE_TRUNC / EXTRACT",
      "Conversion funnel queries: clicks -> account setup -> first transaction, with LEFT JOINs and conditional aggregation",
      "Self-joins or window functions to detect near-duplicate transactions and reciprocal payment relationships",
      "Running balances and cumulative sums over a deposit/withdrawal ledger",
      "CTEs to decompose multi-step business logic (segmentation -> aggregation -> ranking)"
    ],
    "typical_table_themes": [
      "transactions (user_id, merchant_id, amount, currency, status, timestamp)",
      "users / accounts (account creation, KYC status, country, account type)",
      "merchants (onboarding date, category, processing volume, MCC code)",
      "payments / authorizations (auth result, decline reason code, payment method)",
      "disputes and chargebacks (dispute reason, resolution, win/loss)",
      "fraud labels / risk events (rule hits, model scores, manual review outcomes)"
    ],
    "real_question_examples": [
      "Write a query that reports monthly active users, transaction count, and total order amount per month for the last 12 months.",
      "Given a table of deposits and withdrawals, return the final account balance for each account.",
      "For each user, compute their average transaction amount and rank users by that average.",
      "Find pairs of users who have sent money to each other in both directions (two-way reciprocal relationships), without duplicate pairs.",
      "From a click events table and an account setup table, compute the click-to-signup conversion rate per marketing channel.",
      "Identify near-duplicate transactions for the same user where amount and merchant match within a 60-second window.",
      "Calculate the chargeback rate per merchant per month and flag merchants whose rate exceeds 1% for two consecutive months.",
      "Compute the payment authorization success rate by country and decline reason code; surface the top 5 decline reasons driving lost volume.",
      "For each user's first transaction, return the time delta to their second transaction, and bucket users into retention cohorts.",
      "Filter all email addresses ending in a given domain pattern and return the count of accounts and total transaction volume per domain."
    ],
    "role_specific_notes": {
      "Data Analyst": "Heaviest SQL load of the four roles. Expect 2-3 SQL problems on a shared doc plus a take-home analytical case. Interviewers care about correct edge-case handling (NULLs, ties, late-arriving rows), choosing the right metric, and explaining trade-offs in plain business language tied to checkout, merchants, or transaction reporting.",
      "Data Engineer": "SQL is foundational, but evaluated alongside Python/Java/PySpark, pipeline design, and GCP/BigQuery internals. Expect questions on writing performant SQL on huge tables (partitioning, clustering, window-function efficiency), plus Airflow DAG design, schema modeling for transactional data, and ETL system design rounds.",
      "Product Analyst": "SQL framed inside a product/case interview. You are asked to define a metric (auth rate, conversion, fraud rate, dispute win rate), then write the query that computes it, then describe what you'd investigate if the metric moved. Strong emphasis on funnels, A/B test readouts, and segmentation across merchants/users.",
      "ML Engineer": "SQL is light and exploratory \u2014 joins, filtering, aggregations to pull features from BigQuery. The bar is on Python coding (DSA + production-style ML code), feature engineering for fraud/risk models, streaming/rolling computations, model evaluation (precision/recall on imbalanced fraud data), and ML system design for low-latency scoring."
    }
  },
  "Pinterest": {
    "company": "Pinterest",
    "data_domain": "Visual discovery and inspiration platform where users save (pin) and organize (board) content, with a large ads business built on engagement signals, attribution windows, and content recommendations. Heavy emphasis on user engagement, creator/advertiser analytics, ranking, and recommendation systems.",
    "data_stack": "Presto (SQL query engine on data lake), Apache Druid (analytics, recently migrating to StarRocks), Apache Spark (batch and experiment pipelines), Hive Metastore, Kafka (streaming), Airflow (orchestration), S3, MySQL (operational fleet and Druid metadata), Python and PySpark, Kubernetes/EKS for Spark workloads.",
    "interview_difficulty": "Intermediate to advanced. Multi-round loops (typically 4-5 onsite rounds) with timed coding screens via Karat or CodePad. SQL bar is high for analyst/data science roles, moderate-but-required for ML and data engineering.",
    "interview_style": "Conversational and product-grounded \u2014 interviewers care more about thought process, clarification, and metric reasoning than perfectly optimized syntax on the first pass. Most SQL is paired with a product or business case (define the metric, then write the query), with follow-ups to extend or debug the query.",
    "common_question_patterns": [
      "Window functions (LAG, LEAD, RANK, ROW_NUMBER) for month-over-month deltas, ranking pins/boards, and ordering user events",
      "Multi-condition user filtering using GROUP BY with HAVING and NOT IN / NOT EXISTS (e.g., users who pinned in category A but not category B in last N days)",
      "Funnel and conversion analysis across pin impression -> click -> save -> outbound click -> conversion",
      "Sessionization and overlapping/concurrent session detection from raw event streams",
      "Cohort analysis and N-day retention (W1, W4 retention of new pinners or signups)",
      "Aggregation with date filtering and time-bucket rollups (daily / weekly / 7d-rolling DAU, WAU, MAU)",
      "Joins across user, pin, board, and ads/impression tables; handling many-to-many relationships",
      "Metric debugging case: 'engagement dropped X% \u2014 write SQL to investigate which segment / surface / country drove it'"
    ],
    "typical_table_themes": [
      "Pins and boards (pin_id, board_id, category, created_at, owner_user_id)",
      "User events / engagement (impressions, clicks, saves/repins, closeups, outbound clicks)",
      "Ads and attribution (ad_id, campaign_id, advertiser_id, click/view/engagement attribution windows, conversions)",
      "User dimensions (user_id, country, signup_date, gender, age_bucket)",
      "Sessions and surface metadata (home_feed, search, related_pins, shopping)",
      "Experiment assignments (experiment_id, variant, user_id, assigned_at)"
    ],
    "real_question_examples": [
      "Find each user's average monthly pin count and the difference vs. the previous month (LAG over PARTITION BY user_id ORDER BY month).",
      "Return users who pinned at least 5 items in the 'Cooking' category and zero items in the 'Gardening' category in the last 30 days.",
      "Given a raw events table, identify sessions that overlap in time for the same user (concurrent session detection).",
      "Compute click-through rate for ads broken down by surface (home feed vs. search) and country for the past 7 days.",
      "Build a funnel: of users who saw a pin impression, what % clicked, and of those, what % saved the pin? Return one row per day for the last 14 days.",
      "Calculate W1 retention for users who signed up in a given week (cohort by signup week, % active in week 1).",
      "Rank the top 10 boards by save count per category, breaking ties by recency of last save.",
      "Given an ads click table and a conversion table, attribute conversions to clicks within a 7-day click-attribution window (one conversion to most recent eligible click).",
      "Diagnose the metric: 'home-feed CTR dropped 4% week-over-week.' Write SQL to slice by country, OS, and new vs. existing user to find the culprit segment.",
      "Compute average and median time between a user's first pin and their first repin/save."
    ],
    "role_specific_notes": {
      "Data Analyst": "Heavy SQL focus \u2014 complex joins, window functions, GROUP BY/HAVING, CASE expressions, CTEs. Often whiteboard or shared-pad SQL with a senior analyst. Expect a take-home or live SQL exercise plus a Tableau/visualization conversation. Communication of approach matters as much as the final query.",
      "Data Engineer": "SQL is required but is paired with Python/coding (Karat-style screen, often string/data-structure problems), data modeling, and pipeline/system design. Expect questions on partitioning, batch vs. streaming, Spark/Hive/Presto trade-offs, and how you'd build an ETL for pins or ads metrics. Less product-case framing, more 'how would you build it at scale'.",
      "Product Analyst": "The most product-and-metric-heavy SQL. Multi-step case studies: propose a metric for a Pinterest feature (e.g., search relevance, related pins, idea pins), then write the SQL to compute it. Funnels, A/B test readouts, and 'why did metric X move' diagnostics are core. Interviewers explicitly value clear thinking over perfectly optimized SQL on the first attempt.",
      "ML Engineer": "SQL appears but is lighter than for analysts \u2014 typically 1-2 SQL questions in a ~70-minute screen alongside ML and DSA questions. Focus is on pulling features, building training/eval datasets, and joining engagement labels to candidate items. Deeper rounds emphasize recommender systems, ranking, embeddings, and ML system design (Pinterest homefeed, related pins, ads ranking, fraud)."
    }
  },
  "Reddit": {
    "company": "Reddit",
    "data_domain": "Social/community platform centered on subreddits, posts, comments, votes and user engagement, with an advertising business that monetizes attention via targeted ads, brand/conversion lift measurement and auction optimization.",
    "data_stack": "Limited public information available; public signals point to a modern cloud data stack with heavy SQL-on-warehouse usage (BigQuery referenced in some role descriptions), Spark/Scala/Python for batch and streaming, Airflow-style orchestration, and ML platforms supporting ads ranking, recommendations and feed personalization.",
    "interview_difficulty": "Medium; Glassdoor data engineer interviews self-reported around 3.4/5 difficulty. SQL questions are typically medium-hard, requiring CTEs, window functions, and careful metric definition rather than obscure tricks.",
    "interview_style": "Pragmatic, product-driven SQL grounded in Reddit-style entities (users, subreddits, posts, comments, votes, ad impressions). Interviewers care as much about how you define a metric (DAU, engagement, retention) and handle messy community signals as about syntactic correctness.",
    "common_question_patterns": [
      "Daily/weekly/monthly active user calculations scoped by subreddit or surface",
      "Engagement rate metrics combining votes, comments and views with proper denominators",
      "Window functions for ranking top posts, top subreddits or top advertisers per period",
      "Funnel and retention queries (signup -> first post/comment -> N-day return)",
      "Self-joins on a single events table to compare user behavior across days or sessions",
      "Joins between posts and comments (often LEFT JOIN with NULL handling) to measure post-level activity",
      "Aggregations with GROUP BY + HAVING for cohort or threshold filtering (e.g., advertisers above a revenue cutoff)",
      "Ad performance and attribution queries: revenue per advertiser, conversions per campaign, click vs view-through"
    ],
    "typical_table_themes": [
      "users / user_events (event_type, user_id, subreddit_id, timestamp)",
      "posts and comments (author_id, subreddit_id, created_at, parent_id, score)",
      "subreddits / communities (subreddit_id, category, subscriber_count)",
      "votes (user_id, post_id, vote_type, timestamp)",
      "advertisers, campaigns, ad_impressions and conversions (revenue, spend, clicks)",
      "sessions / page_views for time-spent and feed engagement analyses"
    ],
    "real_question_examples": [
      "Write a SQL query to calculate DAU by subreddit, defining 'active' as any view, click, vote, comment or post on that day.",
      "For each subreddit, compute the average number of comments a post receives in its first 24 hours after publication.",
      "Find the top 5 posts by engagement rate (upvotes + comments per view) in the last 30 days.",
      "Given an events table, compute 7-day rolling DAU and the DAU/MAU stickiness ratio per day.",
      "From a sales/advertisers schema, find the daily performance of the advertiser with the highest weekly revenue last week.",
      "Compute the percentage of advertisers whose reported revenue exceeded $40 in a given period.",
      "Identify users who commented on a post within 1 hour of it being published, by subreddit.",
      "Write a query to return all neighborhoods/subreddits that have zero active users (LEFT JOIN + NULL handling).",
      "For a given A/B test, compute per-variant conversion rate and the absolute and relative lift, including sample sizes.",
      "Rank subreddits by week-over-week growth in unique commenters using window functions."
    ],
    "role_specific_notes": {
      "Data Analyst": "Emphasis on translating ambiguous product questions into clean SQL on user/post/comment tables, defining engagement and retention metrics precisely, and pairing queries with a short narrative of insights and recommendations.",
      "Data Engineer": "More focus on schema reasoning, joins/aggregations at scale, and pipeline thinking; expect SQL plus Python/Scala questions and discussion of how queries would translate into Spark/warehouse ETL and orchestration.",
      "Product Analyst": "Multi-step SQL case studies tied to feed, community growth and experimentation: propose the right metric, then write the query; A/B test interpretation, funnel/cohort analysis and dashboard design come up frequently.",
      "ML Engineer": "SQL is supporting rather than central; expect lightweight feature/label extraction queries (e.g., building training labels from event tables) alongside coding, ML system design (ads ranking, recommendations, feed) and model evaluation discussions."
    }
  },
  "Shopify": {
    "company": "Shopify",
    "data_domain": "Commerce platform powering millions of merchants worldwide, with data spanning orders, checkouts, payments, subscriptions, fulfillment, and merchant-facing analytics. Cumulative GMV exceeds $1 trillion, with billions of fraud-detection signals processed across the network.",
    "data_stack": "Google Cloud Platform foundation; BigQuery as central warehouse with Iceberg/GCS lakehouse; dbt for transformation (used by 200+ data scientists, 100+ models, 400+ unit tests) \u2014 internally called Seamster; PySpark via internal Starscream platform (76k jobs, 300 TB/day); Apache Beam/Dataflow for streaming/batch ETL; Kafka for event streaming (peaks at 66M msgs/sec); Apache Airflow for orchestration (10k+ DAGs); Trino for interactive SQL; Druid for OLAP. ML platform Merlin uses Ray and a custom feature store called Pano.",
    "interview_difficulty": "Medium to Hard. Most loops include 5 SQL questions ramping from easy aggregations to harder window/sessionization problems. Levels L4 expect foundational joins and basic windows; L5/L6 expect production-pipeline thinking \u2014 late-arriving data, idempotency, sessionization, and edge-case handling.",
    "interview_style": "Conducted as a 60-90 minute pair programming session in CoderPad (AI tools allowed). Interviewers want to see thought process, edge-case awareness, and clean reasoning over clever one-liners \u2014 the SQL screen is treated as a pipeline-design conversation, not an academic puzzle.",
    "common_question_patterns": [
      "Multi-step aggregations on order/transaction tables (revenue, AOV, GMV by cohort or time bucket)",
      "Window functions for ranking, running totals, rolling averages, and first/last event per merchant or session",
      "Date-spine cross joins to fill missing dates with zeros (no-activity days)",
      "Sessionization from raw event streams using lag/lead and gap detection",
      "Funnel and conversion analysis across checkout steps (view to add-to-cart to checkout to purchase)",
      "Retention, churn, and cohort analysis for merchants or buyers",
      "Edge-case handling: nulls, duplicates, late-arriving events, refunds reversing prior orders",
      "Joins across fact and dimension tables with care for one-to-many and slowly changing dimensions",
      "Set operations like EXCEPT/MINUS and conceptual questions on correlated vs. non-correlated subqueries"
    ],
    "typical_table_themes": [
      "Orders and order_items (with refunds, discounts, line-level financial breakdown)",
      "Checkouts and checkout_events (multi-step funnel, cart abandonment)",
      "Merchants/shops (plan tier, country, vertical, signup date)",
      "Payments and transactions (auth, capture, chargeback, dispute, fraud signals)",
      "Sessions and pageviews (raw clickstream for sessionization)",
      "Products, variants, and inventory (catalog and fulfillment context)"
    ],
    "real_question_examples": [
      "Given an orders table, calculate monthly GMV per merchant and rank merchants within their country by GMV using a window function.",
      "Find all unfulfilled orders older than 15 days and return them grouped by shop with the count and oldest order date.",
      "Given a raw events table (user_id, event_time, event_type), sessionize the events using a 30-minute inactivity gap and return events per session.",
      "Build a checkout funnel: for each day, return counts of sessions, add_to_cart, checkout_started, and purchase, plus conversion rates between each step.",
      "Compute a 7-day rolling average of daily orders per shop, including days with zero orders (use a date spine cross join).",
      "Given orders and refunds tables, compute net revenue per merchant per month and flag merchants whose refund rate exceeds 10%.",
      "Calculate the average star rating per product per month from a reviews table and identify products whose rating dropped month-over-month.",
      "Identify customers whose first order was in the last 90 days and compute their repeat-purchase rate within 30 days of first order.",
      "Given a payments table with auth and capture events, compute the authorization-to-capture latency distribution and surface anomalies.",
      "Detect duplicate order records caused by an upstream event-bus retry and write a deduplication query that keeps the earliest valid record."
    ],
    "role_specific_notes": {
      "Data Analyst": "Heavy emphasis on merchant-facing metrics (GMV, AOV, conversion, retention) and translating SQL output into business recommendations. Expect product-sense follow-ups: 'why might this metric have moved?' Communication and clean, readable SQL matter more than exotic syntax.",
      "Data Engineer": "Most rigorous SQL bar. Expect production-pipeline framing: dimensional modeling, idempotency, late-arriving data, deduplication, schema evolution, and pipeline reliability. Interviewers want to see you reason about data quality, edge cases, and how the query would behave in a scheduled dbt/Airflow run, not just whether it returns the right rows.",
      "Product Analyst": "Funnel analysis, A/B test readout, and feature-launch impact analysis are core. SQL is paired with statistical reasoning (significance, sample size) and product judgment about merchant and buyer behavior. Expect questions on cohorting, segmentation, and metric definition trade-offs.",
      "ML Engineer": "SQL is used to assess feature engineering and training-data construction skills \u2014 building point-in-time-correct datasets, avoiding label leakage, and joining behavioral data with model labels. Less emphasis on pure analytics SQL; more on data prep for fraud, recommendations, or revenue-prediction models that run on the Merlin platform."
    }
  },
  "Snowflake": {
    "company": "Snowflake",
    "data_domain": "Cloud-based data warehousing and AI/data platform serving enterprise customers across industries. Internal data centers around customer usage telemetry (warehouses, queries, credits), product analytics for the platform itself, marketplace activity, and go-to-market data.",
    "data_stack": "Snowflake (dogfooded as the warehouse), Snowpark (Python/Java/Scala), Snowpipe and COPY INTO for ingestion, Streams and Tasks for CDC/orchestration, dbt commonly referenced, Cortex for AI/ML, Tableau/Sigma/Looker for BI, Python with pandas/scikit-learn for modeling.",
    "interview_difficulty": "Moderate to hard. Glassdoor difficulty around 3.3/5. SQL bar is notably high because Snowflake builds and sells a SQL warehouse \u2014 interviewers expect fluent advanced SQL and an understanding of how queries execute.",
    "interview_style": "Live SQL on CoderPad over Zoom, often paired with Python/pandas screens. Multi-round process (recruiter, technical screen, 3-5 onsite panels) that mixes pure SQL problems with data modeling, system/warehouse design, and trade-off discussions where reasoning is weighed as heavily as the final query.",
    "common_question_patterns": [
      "Window functions for time-series analysis (running totals, month-over-month growth, lead/lag)",
      "Consecutive-event / streak detection (e.g., users active N weeks in a row) using gaps-and-islands patterns",
      "Multi-table joins with aggregations and careful NULL handling",
      "Semi-structured data: parsing VARIANT/JSON with PARSE_JSON, FLATTEN, LATERAL, and path notation",
      "Cohort and retention analysis with date bucketing (DATE_TRUNC, EXTRACT)",
      "Top-N per group / ranking problems using ROW_NUMBER, RANK, DENSE_RANK with PARTITION BY",
      "Query optimization and explain-plan reasoning (clustering keys, pruning, materialized views, warehouse sizing)",
      "Data modeling and ETL design: dimensional vs. wide tables, slowly changing dimensions, idempotent pipelines"
    ],
    "typical_table_themes": [
      "Customer usage / credit consumption (warehouse_runs, queries, credits_used)",
      "Marketplace listings, product usage events, and ratings",
      "Marketing touches, campaigns, and CRM interactions",
      "Subscriptions, accounts, and billing transactions",
      "Web/app event streams stored as semi-structured JSON",
      "Pipeline metadata: jobs, runs, statuses, latencies"
    ],
    "real_question_examples": [
      "Given transactions and customers, compute each customer's monthly spend and percent change vs. the prior month.",
      "Identify customers who had at least one marketing touch in three or more consecutive weeks.",
      "Calculate the average rating per Snowflake marketplace product on a monthly basis, ordered by month and product.",
      "From an events table stored as VARIANT/JSON, flatten the payload and count distinct users per event type per day.",
      "Sample every 4th row ordered by transaction date from a transactions table.",
      "Given ad impressions and clicks, compute click-through rate per campaign and per day, handling campaigns with zero clicks.",
      "For a usage_logs table, return each product, total uses, and distinct users; explain how you'd index/cluster it at scale.",
      "Pivot a long sales table into monthly columns by product (or use conditional aggregation) and discuss trade-offs.",
      "Write a recursive CTE to walk an org-hierarchy or account-parent table and return the path/depth for each node.",
      "Design a query and warehouse strategy to compute daily active accounts on a 50TB event table, and discuss pruning, clustering, and materialized views."
    ],
    "role_specific_notes": {
      "Data Analyst": "Heavy emphasis on writing clean, correct SQL fast against business tables. Expect aggregations, joins, window functions, cohort/retention questions, and a follow-up on how you'd present the result to a stakeholder. Familiarity with BI tools (Tableau, PowerBI, Sigma) and the ability to investigate data-quality issues comes up.",
      "Data Engineer": "SQL is described as 'king' across rounds. Expect advanced SQL plus Python/pandas screening, data modeling questions (views vs. materialized views vs. physical tables, SCDs, immutable snapshots with corrections), pipeline design with Snowpipe/Streams/Tasks or generic ETL, and trade-off discussions on governance, PII masking, and performance tuning. System-design rounds focus on data systems rather than generic distributed systems.",
      "Product Analyst": "Mix of SQL and product sense. Expect questions on defining and computing product metrics (DAU/WAU, activation, conversion, retention), A/B test design and analysis, and a take-home or live case study where you derive insights from a dataset. SQL questions skew toward funnel analysis, segmentation, and pivoting product usage data.",
      "ML Engineer": "Two-track interview: SQL for feature engineering on large tables, plus an ML/coding portion (often building or critiquing a model in a Jupyter Notebook with pandas, numpy, scikit-learn). Expect questions about evaluation metrics, supervised vs. unsupervised problem framing, and how you'd productionize a model using Snowpark or Cortex. Knowledge of how to train/score on data resident in the warehouse is a plus."
    }
  },
  "Spotify": {
    "company": "Spotify",
    "data_domain": "Music and podcast streaming with deep personalization at global scale (600M+ listeners). Data powers recommendations (Discover Weekly, Daily Mix), listener analytics, advertising, royalty/payout reporting, and experimentation.",
    "data_stack": "Google Cloud Platform-centric: BigQuery as the analytics warehouse, Apache Beam on Cloud Dataflow with Scio (Spotify's Scala API for Beam) for batch and streaming pipelines, Apache Flink for streaming, Flyte for orchestration (migrated from Luigi/Flo), GCS for storage, and Backstage for service/data asset cataloging. Languages: SQL, Scala, Python, Java.",
    "interview_difficulty": "Medium to Medium-Hard. SQL bar is solid but rarely brain-teaser hard; questions favor realistic streaming/listening data shaped problems requiring window functions, sessionization, and time-bucketed aggregations.",
    "interview_style": "Practical, product-flavored SQL interleaved with ML/system-design or product-sense conversation depending on role. Interviewers care about clean reasoning over scale, correct null/dedup handling on event data, and whether you can connect a query result to a listener metric (engagement, retention, skip rate).",
    "common_question_patterns": [
      "Window functions: ROW_NUMBER / RANK / DENSE_RANK to find first/Nth event per user (e.g., earliest date a user played their 3rd unique song)",
      "Rolling and moving averages over time (7-day rolling listens per artist, 28-day active listeners)",
      "Top-N per group with ties (top songs/artists per country, per week)",
      "Cohort retention and consecutive-day activity (users active N days in a row, day-7/day-30 retention)",
      "Sessionization of stream events using lag/lead and time-gap thresholds",
      "Deduping noisy event logs and partition-aware querying on date-partitioned BigQuery tables",
      "Funnel and conversion analysis (free to premium, signup to first save, impression to play)",
      "A/B test result interrogation: aggregate metrics by variant, compute lift, sanity-check sample ratio"
    ],
    "typical_table_themes": [
      "Streams / play events (user_id, track_id, timestamp, ms_played, country, device)",
      "Users and subscriptions (free vs premium, signup_date, country, plan_changes)",
      "Tracks, artists, albums, and genre metadata",
      "Playlists and saves (user_id, playlist_id, track_id, added_at)",
      "Daily/weekly chart and ranking tables (Spotify Charts style)",
      "Podcast episodes and listening sessions"
    ],
    "real_question_examples": [
      "Given a daily listens table, compute the 7-day rolling average of listens per artist.",
      "Find the top 5 artists by appearances in the daily top-10 chart over a given period.",
      "Identify users who streamed music on 4 (or N) consecutive days in the current week.",
      "For each user, find the earliest date they played their 3rd unique song.",
      "Find premium users active in the last 30 days who have streamed 15+ distinct artists.",
      "Compute average listening time per genre by month, handling NULL ms_played correctly.",
      "Sessionize stream events: a new session starts after a 30-minute gap; report avg session length per country.",
      "From an A/B test events table, compute streams per active user per variant and the lift vs control.",
      "Find users who have listened to every track on a given artist's discography (relational division).",
      "Given a Charts table, find how many days a track held the #1 position in the US."
    ],
    "role_specific_notes": {
      "Data Analyst": "Strong emphasis on SQL fundamentals (joins, aggregations, subqueries, window functions) plus product/business framing. Expect a tech screen that mixes definition questions (WHERE vs HAVING, CTE usage, denormalization) with one or two query problems on listening or chart data, then an analytics case tying SQL output to a recommendation or engagement question.",
      "Data Engineer": "SQL goes deeper: windowing, dedup, partition-aware queries on BigQuery, time-bucketing, and handling late/duplicate event data. Pair with system design (build a streaming pipeline for play events) where Beam/Scio/Dataflow, Flink, BigQuery, and Flyte familiarity helps. Expect conceptual data-modeling questions (star schemas, slowly changing dims, partitioning/clustering).",
      "Product Analyst": "Heavier on metric definition and experimentation than raw SQL trickery. SQL questions are framed around DAU/MAU, retention cohorts, funnel conversion, and A/B test readouts. Be ready to choose primary/guardrail metrics for a feature (e.g., Discover Weekly, Daily Mix, podcast follow flow), explain SRM/novelty/network effects, and walk through a product case with SQL backing the analysis.",
      "ML Engineer": "SQL is a supporting skill, not the centerpiece. Expect to write SQL to construct training/eval datasets from large event tables (e.g., per-user labels for skip/save/completion), plus algorithms/coding (Python/Scala) and ML system design (often a Discover Weekly-style two-stage candidate generation + ranking design). Production ML, offline/online metric alignment, and recommender-system evaluation matter more than advanced query golf."
    }
  },
  "Stripe": {
    "company": "Stripe",
    "data_domain": "Online payments and financial infrastructure for businesses worldwide. Core data revolves around merchants, payments, transactions, authorizations, chargebacks, fraud signals, payouts, subscriptions/billing, and platform connect accounts.",
    "data_stack": "Confirmed via public talks/blogs: Apache Spark for batch transformations, Trino for interactive querying, Apache Iceberg as the lakehouse table format, Apache Airflow for orchestration (petabyte-scale, ~250 pipelines / 150K tasks), Presto/Trino, Scala and Python for jobs, internal tooling (Pelican, Schema), and Snowflake/dbt-style modeling appears in some warehouse contexts.",
    "interview_difficulty": "Hard. Multi-round loop (typically 4-7 stages) with SQL questions that go beyond LeetCode-style: realistic payments schemas, multi-step queries, edge cases around time zones, deduplication, and event semantics. Bar is high for clarity, correctness, and product reasoning.",
    "interview_style": "Pragmatic and business-grounded: SQL problems are framed against payments, merchants, and fraud rather than abstract puzzles. Interviewers expect candidates to clarify schema, narrate trade-offs, handle ambiguity (timezones, late-arriving events, duplicates), and tie queries back to a metric a PM or merchant would care about.",
    "common_question_patterns": [
      "Window functions (LAG/LEAD, ROW_NUMBER, SUM OVER) for sessionization, deduping, and rolling metrics",
      "Self-joins on transaction tables to detect repeated/duplicate payments within a time window",
      "Month-over-month / week-over-week deltas using CTEs and date_trunc",
      "Cohort retention and churn for merchants or subscriptions",
      "Funnel conversion analysis (e.g., authorization -> capture -> success)",
      "Anomaly / drop detection on rates (authorization rate, fraud rate, dispute rate)",
      "Aggregations with conditional CASE logic across payment statuses",
      "Handling time zones, late events, and idempotency keys correctly in queries"
    ],
    "typical_table_themes": [
      "payments / charges (amount, currency, status, created_at, merchant_id, card_id)",
      "merchants / accounts (signup_date, country, vertical, MCC)",
      "disputes / chargebacks (reason_code, opened_at, resolved_at)",
      "authorizations and decline reasons",
      "subscriptions / invoices / billing events",
      "fraud signals / Radar scores and rules outcomes"
    ],
    "real_question_examples": [
      "Find merchants whose authorization rate dropped by more than 10 percentage points month-over-month over the last 3 months.",
      "Identify repeated payments at the same merchant with the same card for the same amount within 10 minutes; count the number of such repeated charges.",
      "Compute weekly active merchants, ensuring each merchant is counted only once per week even with multiple events, and handling time zones correctly.",
      "Calculate the average transaction amount per customer for a given year and rank customers by spend.",
      "Build a cohort retention table for merchants by signup month, showing the share still actively processing N months later.",
      "Compute month-over-month growth in gross payment volume (GPV) per country, excluding refunded transactions.",
      "Detect anomalies in dispute rate by merchant vertical using a rolling 7-day baseline.",
      "Given a payments funnel (intent -> auth -> capture -> success), compute conversion rate at each step and identify the largest drop-off.",
      "Find customers who made a payment in month N but not in month N+1 (churn flag) and compute monthly churn rate.",
      "Using LAG, identify cards with abnormal time gaps between consecutive successful authorizations as a potential fraud signal."
    ],
    "role_specific_notes": {
      "Data Analyst": "Heaviest SQL load. Expect a 60-min SQL/analytical phone screen plus a take-home or live case study on payments data. They emphasize clean, readable queries, framing the business question, and communicating insights to non-technical stakeholders. Knowing payments KPIs (GPV, auth rate, churn, chargeback rate) is a clear differentiator.",
      "Data Engineer": "SQL is necessary but evaluated alongside pipeline design. Expect questions on idempotent upserts (often keyed on payment_intent_id), deduplication of events, schema evolution, partitioning, and orchestrating Spark/Airflow jobs over Iceberg/Trino. SQL problems often involve large-scale transformations, late-arriving data, and correctness under retries.",
      "Product Analyst": "SQL is paired with product sense. Questions blend metric definition (how would you measure Radar's impact on chargeback rate?) with the SQL to compute it. Expect experimentation/A-B testing context, funnel analysis, and feature-launch impact measurement on merchant behavior.",
      "ML Engineer": "Lighter pure-SQL than analyst roles, but candidates are still expected to write production-grade SQL for feature engineering and label construction (e.g., aggregations over a card's historical authorizations, building fraud labels from disputes). Window functions and time-bounded aggregations are common; the bigger emphasis is ML system design (Radar-style fraud detection), feature pipelines, and offline/online consistency."
    }
  },
  "Uber": {
    "company": "Uber",
    "data_domain": "Two-sided marketplace data spanning Rides, Eats, and Freight: rider/driver supply-demand balance, trip lifecycle events, dynamic pricing/surge, ETAs, dispatch, payments, courier/merchant operations, and freight matching. Heavy emphasis on geo, time-series, and city-level marketplace health.",
    "data_stack": "Apache Hive and Spark for batch/ETL on a 100+ PB data lake; Presto for interactive ad-hoc SQL; Apache Pinot for low-latency real-time OLAP (with SQL support engineered in); Kafka for streaming; Michelangelo (and Michelangelo 2.0) as the ML platform with feature store and 10M+ real-time predictions/sec; Hudi for data lake table format. SQL is the lingua franca across batch (Hive/Spark/Presto) and real-time (Pinot) layers.",
    "interview_difficulty": "Medium to hard. Typically 2-3 SQL problems in a technical screen, with at least one window-function-heavy problem and one multi-join time-series problem. Onsite SQL goes deeper on edge cases, marketplace metric definitions, and trade-offs.",
    "interview_style": "Live coding in a shared editor against Uber-style schemas (trips, riders, drivers, cities, sessions). Interviewers expect you to state assumptions, handle NULLs/duplicates/timezones, discuss query performance on billion-row tables, and tie the SQL back to a marketplace metric or product decision rather than just returning rows.",
    "common_question_patterns": [
      "Window functions: ROW_NUMBER / RANK / DENSE_RANK to find Nth event per user (e.g., 3rd transaction, 2nd ride)",
      "LAG / LEAD for month-over-month or week-over-week change in completed trips per city",
      "Rolling / moving averages with AVG() OVER (PARTITION BY ... ORDER BY ... ROWS BETWEEN ...) for 7-day active riders or surge metrics",
      "Cohort / retention analysis: bucket users by first-trip date, then measure repeat rate in subsequent windows",
      "Sessionization and time-between-events: gap between sign-up and first ride, or first and second ride",
      "Self-joins / range joins to attach the 'in-effect' record (active promo, surge multiplier, driver shift) to each trip via BETWEEN predicates",
      "Conversion funnels: request -> match -> pickup -> complete, computing drop-off at each step",
      "Conditional aggregation with CASE WHEN to compute cancellation rate, completion rate, or paid vs free cohorts in a single pass"
    ],
    "typical_table_themes": [
      "trips / rides (trip_id, rider_id, driver_id, city_id, requested_at, started_at, completed_at, status, fare, surge_multiplier)",
      "users / riders / drivers (signup_date, city, account status, paying_customer flag)",
      "sessions and app events (open, request, cancel, rate)",
      "promotions / pricing (promo_id, start_at, end_at, discount, surge windows)",
      "Eats orders, deliveries, restaurants/merchants, couriers (order_id, restaurant_id, delivery_time, prep_time)",
      "geo / cities / regions dimension tables for marketplace breakdowns"
    ],
    "real_question_examples": [
      "Find the month-over-month change in completed trips for each city using window functions.",
      "For each rider with at least two trips, compute the elapsed time between their first and second trip.",
      "Compute the 7-day rolling average of daily active riders per city.",
      "Given trips and overlapping promotions, attach to each trip the promo in effect at request time; if multiple match, pick the one with the latest start_at.",
      "From user_dimension, account_dimension, and download_facts, compute average daily downloads broken out by paying vs free customers.",
      "Identify the most-used vehicle type in the past year, excluding rides cancelled by either rider or driver.",
      "Find the third transaction for every user (ordered by transaction_date).",
      "Compute average delay in days between sign-up and the 2nd ride for 'in-the-moment' riders (signed up the same day as their first ride).",
      "Build a request-to-completed-trip funnel and report drop-off rates by city and hour of day.",
      "How would surge multiplier and wait time relate to cancellation rate? Group by surge_multiplier bucket and compute cancellation rate."
    ],
    "role_specific_notes": {
      "Data Analyst": "SQL is the dominant signal (often cited as ~90% of the technical screen). Expect 2-3 medium SQL problems heavy on window functions (PARTITION BY, LAG/LEAD, ROW_NUMBER) plus aggregations on trip-level data. Strong emphasis on metric definition, edge-case handling (NULLs, duplicates, timezones), and explaining what the number means for the marketplace.",
      "Data Engineer": "SQL skews harder and is paired with data modeling and pipeline design. Expect complex multi-join queries on event tables, questions about schema design for trips/payments at scale, late-arriving data, backfills, and idempotency. Hive/Spark/Presto knowledge is assumed; expect follow-ups on partitioning, skew, and query optimization on billion-row tables.",
      "Product Analyst": "SQL is tightly coupled to experimentation and product cases. Window functions and cohorting show up, but the bigger signal is whether you can translate a SQL result into a marketplace insight (rider/driver behavior, supply-demand mismatch, Eats order frequency). A/B test design and 'why is metric X moving?' root-cause questions follow the SQL round.",
      "ML Engineer": "SQL is lighter than for analysts/DEs but still tested, often via a take-home or one screen round on feature engineering style questions: building training labels, computing per-user/per-driver aggregates, and time-bounded feature windows that respect train/serve consistency. Bigger weight goes to ML coding, system design (feature stores, real-time vs batch inference, Michelangelo-style platforms), and handling 10M+ predictions/sec scale."
    }
  },
  "Visa": {
    "company": "Visa",
    "data_domain": "Global payments network operating VisaNet, the rails that authorize, clear, and settle 200+ billion card transactions per year (65K+ TPS peak). Heavy data work centers on real-time fraud and risk scoring, authorization/decline analytics, interchange and settlement reporting, issuer/merchant/acquirer analytics, cross-border flows, tokenization, and Visa Direct money movement.",
    "data_stack": "Hadoop / Hive / HDFS for the historical transaction lake, Apache Spark (PySpark) for batch processing, Kafka + Flink / Spark Streaming for real-time scoring pipelines, Greenplum / Teradata / Oracle in legacy warehouses, growing Snowflake footprint, Python and Java/Scala for engineering, SQL across all surfaces, scikit-learn / TensorFlow / PyTorch and PySpark MLlib for modeling, Tableau for BI, Jenkins / Git for CI/CD. PCI-DSS compliance shapes data access patterns.",
    "interview_difficulty": "Medium overall for SQL \u2014 closer to applied business SQL than LeetCode puzzle. Two easy + one medium SQL problem is the most commonly reported shape. Senior and DE roles add system design and big-data depth that pushes the difficulty higher.",
    "interview_style": "SQL is delivered live (CodeSignal, shared doc, or whiteboard) with realistic payments schemas \u2014 issuers, merchants, MCCs, transactions, cardholders. Interviewers care less about exotic syntax and more about whether you can join the right tables, pick the right grain, and explain the business meaning of your output. Expect probing follow-ups on edge cases (NULLs, declined vs settled, duplicates) and how you'd validate the number against a payments KPI.",
    "common_question_patterns": [
      "Aggregations with GROUP BY + HAVING to filter cohorts (e.g., merchants/issuers/categories meeting a volume or count threshold)",
      "Window functions for ranking \u2014 ROW_NUMBER / RANK / DENSE_RANK partitioned by issuer, MCC, region, or cardholder",
      "Multi-table joins across transactions, cards, issuers, merchants, and MCC reference tables",
      "Time-bucketed metrics using DATE_TRUNC / EXTRACT \u2014 daily/weekly/monthly transaction volume, average swipes per user per day, rolling windows",
      "Top-N per group queries (top issuers per category, top merchants per region) using window functions or correlated subqueries",
      "Conditional aggregation with CASE WHEN for approval rate, fraud rate, chargeback rate, decline-reason breakdowns",
      "CTEs to decompose multi-step logic \u2014 segment, then aggregate, then rank/filter",
      "Density / ratio metrics computed from joined tables (e.g., unique customers per area, spend per cardholder, interchange per merchant category)"
    ],
    "typical_table_themes": [
      "transactions / authorizations (transaction_id, card_id, merchant_id, amount, currency, mcc, auth_status, transaction_ts)",
      "cards / cardholders (card_id, issuer_id, country, product_type, activation_date)",
      "issuers and acquirers (bank_id, name, country, BIN ranges)",
      "merchants (merchant_id, name, mcc, acquirer_id, region, onboarding_date)",
      "MCC / merchant category reference tables (category_code, category_name, segment)",
      "fraud / risk events (rule_id, model_score, decision, chargeback_flag)"
    ],
    "real_question_examples": [
      "Identify the top 3 areas with the highest customer density, where density = distinct customers in the area divided by area size (joins transactions to stores).",
      "Calculate the average number of card swipes per user per day for the last 90 days.",
      "Select the top 3 departments / merchant categories with at least 10 employees / merchants and the highest average salary / spend (GROUP BY + HAVING + ORDER BY + LIMIT).",
      "Count the number of customers per card issuer for a given month.",
      "For each issuer and merchant category combination, compute total interchange revenue and rank issuers within each category.",
      "Find the highest spending cardholder's issuer for each country.",
      "Compute the authorization approval rate per issuer and per MCC, and surface the top decline reasons driving lost volume.",
      "Given a transactions table, return the running 7-day total spend per cardholder using a window function.",
      "Find the top 5 merchants by transaction count in each region, breaking ties by total amount.",
      "From streaming-style transaction data, identify cardholders with more than N transactions in a 60-second window (potential fraud signal)."
    ],
    "role_specific_notes": {
      "Data Analyst": "Most SQL-intensive of the four. Five-step loop: recruiter chat, online SQL/Excel assessment, two technical screens (one SQL-heavy, one case), onsite, hiring committee. Expect classic problems \u2014 JOIN types, conditional new columns, median without MEDIAN(), quartiles, top-N density questions on payments tables. Strong emphasis on translating numbers into business narrative (issuer health, merchant performance, approval rates).",
      "Data Engineer": "SQL is the floor, not the ceiling. Two technical rounds typical: one on the Hadoop/Hive/Spark/Greenplum stack and Tableau/CI-CD, one on Python/Perl scripting and TDD/Agile. SQL questions probe window functions and joins on huge transaction tables, partitioning/clustering choices, and how you'd build a Kafka -> Flink/Spark Streaming pipeline that respects PCI-DSS. System design rounds focus on real-time fraud pipelines and 65K-TPS scale.",
      "Product Analyst": "SQL is wrapped inside product cases. Online assessment is SQL + Excel; onsite includes a 15-minute case study you present back. Expect prompts like 'what would you measure to track success of a fraud-detection feature?' followed by writing the SQL to compute it. Metric design (approval rate, auth-to-settlement, spend per card, fraud rate, Visa Checkout adoption), A/B test readouts, and segmentation across issuers/MCCs are core.",
      "ML Engineer": "SQL is lighter and exploratory \u2014 joins, filters, aggregations to pull features from Hive/Hadoop or Snowflake. Bar is on Python (and sometimes Java) coding at medium-hard difficulty, plus ML system design. Expect to design real-time fraud-scoring or card-offer-personalization systems, discuss handling imbalanced data, choose AUC vs precision-recall, reason about drift and retraining, and walk through a streaming feature pipeline (Kafka -> Spark/Flink -> model -> decision)."
    }
  },
  "Walmart": {
    "company": "Walmart",
    "data_domain": "World's largest retailer with massive omnichannel data spanning in-store transactions, e-commerce, supply chain, inventory, fulfillment, advertising/Walmart Connect, and Sam's Club membership. Data scale is enormous: billions of weekly transactions across thousands of stores plus walmart.com, with heavy emphasis on retail/inventory/supply-chain analytics.",
    "data_stack": "Hybrid multi-cloud: Google Cloud Platform (BigQuery prominent for analytics), Microsoft Azure, and significant on-prem footprint. Heavy use of Apache Spark/PySpark, Hive, Presto, Kafka, Cassandra, Hadoop, and Airflow for orchestration. Internal ML platform 'Element' built on Kubernetes. Teradata still used in legacy supply-chain and merchandising workflows. Looker, Tableau, and Power BI for BI.",
    "interview_difficulty": "Medium to medium-hard. SQL bar is solidly intermediate-to-advanced (window functions, CTEs, multi-join business logic, optimization). Less LeetCode-puzzle than FAANG, more grounded in retail/supply-chain scenarios. Multiple rounds (4-6 typically) with both SQL and broader engineering/ML depth depending on role.",
    "interview_style": "Scenario-driven: most questions are framed around real retail problems (sales, inventory, orders, returns, store performance) rather than abstract puzzles. Interviewers expect production-ready, optimized SQL and want candidates to talk through query plans, joins, and edge cases. Behavioral component leans on STAR and Walmart's leadership values.",
    "common_question_patterns": [
      "Window functions for ranking (top-N per region/store/category) using ROW_NUMBER, RANK, DENSE_RANK",
      "Running totals and rolling aggregates over sales using SUM/AVG OVER with ROWS BETWEEN frames",
      "Date-based filtering and cohort logic (last 6 months, trailing 30-day, same-day, MoM/YoY growth)",
      "Multi-table joins across orders, customers, products, stores, inventory with handling of NULLs and many-to-many relationships",
      "Gaps-and-islands problems (restock cycles, consecutive days out of stock, session boundaries)",
      "GROUP BY with HAVING for threshold-based aggregations (e.g., categories above a revenue floor)",
      "Self-joins and LAG/LEAD for period-over-period comparisons",
      "Query optimization: rewriting slow queries, indexing, partitioning, avoiding correlated subqueries",
      "CTEs and subqueries to break complex business logic into readable layers"
    ],
    "typical_table_themes": [
      "Orders and order_items (transaction grain, online and in-store)",
      "Products / SKUs / categories with hierarchical taxonomy",
      "Inventory and stock movements (on-hand, restock_date, days-out-of-stock)",
      "Stores and regions (geography, store_id, format)",
      "Customers and loyalty/membership (Sam's Club, Walmart+)",
      "Sales/revenue facts joined to date dimension",
      "Sessions, page views and app events for product analytics",
      "Suppliers, shipments, and fulfillment events for supply-chain"
    ],
    "real_question_examples": [
      "Calculate total sales revenue per product category over the last six months, including only categories with more than $10,000 in revenue.",
      "Find the top 5 customers by total spend in the last year; return customer_id, name, and total spending.",
      "Identify all products that have been out of stock for more than 15 days in the last month; return product_id, name, and total days out of stock.",
      "For each product, compute average days-on-hand inventory using current units divided by trailing-30-day sales rate (window with ROWS BETWEEN 29 PRECEDING AND CURRENT ROW).",
      "After each restock, compute a running total of sales per product per restock cycle (gaps-and-islands; window resets at each restock_date).",
      "Find users who started a session and placed an order on the same day; return order count and total order value for that day per user.",
      "Find the top-selling product in each region by revenue over the past month (window function ranked per partition).",
      "Build a histogram of users by number of purchases (e.g., DataLemur-style bucket count of users with 1, 2, 3+ purchases).",
      "Given a slow query computing total revenue per store, rewrite it for performance and explain your indexing/partitioning choice.",
      "Write a transactional update applying a promotional discount across products with rollback on any error."
    ],
    "role_specific_notes": {
      "Data Analyst": "Strongest emphasis on intermediate SQL plus Tableau/Power BI and basic Python. Expect a take-home or live SQL assessment against mock orders/sales/inventory tables, plus a STAR-format behavioral case (e.g., 'a time you used data to solve a business problem'). Communicating insights to non-technical stakeholders is heavily weighted.",
      "Data Engineer": "Hardest SQL bar of the four. Multi-round process (often 4-6 rounds): SQL coding, Python, PySpark/Spark optimization, system/data-pipeline design, and behavioral. Expect questions on Spark partitioning, shuffles, broadcast joins, Kafka stream handling, Airflow DAG design, and big-data concepts on top of advanced SQL (window functions, CTEs, query tuning). Data modeling (star schema, SCD types) is also probed.",
      "Product Analyst": "SQL plus A/B testing methodology and product metrics. Questions skew toward funnel analysis, conversion, retention cohorts, and feature impact (e.g., walmart.com checkout, search, app sessions). Expect to translate an ambiguous product question into a SQL query and a metrics framework, then defend tradeoffs.",
      "ML Engineer": "SQL is a baseline filter rather than the focus. One-hour HackerRank-style screen with 1-2 medium/hard problems mixing Python and SQL on data manipulation. Deeper rounds focus on ML system design, feature engineering on retail data, model evaluation, and the Element ML platform / MLOps; SQL questions tend to be aggregation and join problems for building features rather than puzzle-style window-function problems."
    }
  }
};
