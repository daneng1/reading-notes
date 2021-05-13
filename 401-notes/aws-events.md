# AWS Events

## Questions

1. Describe the similarities between AWS API Gateway + Lambda functions and an ExpressJS Server
1. List the AWS Database offerings and talk about the pros and cons of each. 

- Amazon Aurora is a MySQL- and PostgreSQL-compatible enterprise-class database, starting at <$1/day. Aurora supports up to 64TB of auto-scaling storage capacity, 6-way replication across three availability zones, and 15 low-latency read replicas.

- ElastiCache - ElastiCache is a web service that makes it easier to launch, manage, and scale a distributed in-memory cache in the cloud.

- Amazon DynamoDB is a fully managed non-relational database service that provides fast and predictable performance with seamless scalability.

- Amazon Neptune is a fast, reliable graph database service that makes it easy to build and run applications that work with highly connected datasets.

- Amazon QLDB is a fully managed ledger database that provides a transparent, immutable, and cryptographically verifiable transaction log owned by a central trusted authority. Amazon QLDB tracks each and every application data change and maintains a complete and verifiable history of changes over time.

- Amazon DocumentDB (with MongoDB compatibility) is a fast, scalable, highly available, and fully managed document database service that supports MongoDB workloads.

- Amazon Keyspaces (for Apache Cassandra)is a scalable, highly available, and managed Apache Cassandra–compatible database service.

- Timestream can easily store and analyze sensor data for IoT applications, metrics for DevOps use cases, and telemetry for application monitoring scenarios such as clickstream data analysis.

1. What’s the difference between a FIFO and a standard queue? - FIFO, or first-in, first-out is what the process a  standard queue uses, so they are the same.
1. How can the server be assured a message was properly received? - because of the SYN/ACK cycle.

### Vocab

- *Serverless API* - these are API's that don't need a server file to run. They are managed by a CDN system.
- *Triggers* - these are links ou make between different AWS services so that when an event fires on one service, another service will know to do something.
- *Dynamo vs Mongo* - they are basically the same but one Dynamo is hosted by AWS. Both are non-relational databases.
- *Dynamoose vs Mongoose* - they are bascially the same but Dynamoose is the controller shell for DynamoDB and Mongoose is the controller shell for MongoDB.

[Back to Read Me](../README.md)
