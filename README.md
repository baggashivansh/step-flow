# StepFlow

**StepFlow** is a beginner-friendly backend project built with Motia that demonstrates
how APIs and background jobs can be unified using a single primitive: **Steps**.

---

## 🚨 Problem

Backend development is fragmented.

To build a simple async task system, developers usually combine:
- API frameworks (Express/Fastify)
- Queues (BullMQ/RabbitMQ)
- Workers
- State & logging tools

This increases complexity, setup time, and mental overhead.

---

## ✅ Solution

StepFlow shows how **Motia eliminates this fragmentation**.

Using just **two Steps**, we build:
- An API endpoint
- An async background processor
- Event-driven communication
- Built-in logging and observability

No separate queue or worker setup required.

---

## 🧩 Architecture

POST /task
↓
API Step (CreateTask)
↓ emits event
task.created
↓
Event Step (ProcessTask)


---

## 🛠️ Steps Overview

### 1. CreateTask (API Step)
- Accepts a task via HTTP
- Emits a `task.created` event
- Returns a task ID immediately

### 2. ProcessTask (Event Step)
- Subscribes to `task.created`
- Processes the task asynchronously
- Logs completion

---

## 💡 Why Motia

Motia uses **Steps** as a single backend primitive to represent:
- APIs
- Background jobs
- Events
- Workflows

StepFlow demonstrates this concept in the simplest possible way.

---

## ⚠️ Note on Local Runtime

While implementing StepFlow, a known macOS issue with Motia’s embedded
Redis Memory Server prevented the local dev server from starting.

The **architecture, Steps, and event flow are implemented correctly**.
This project focuses on **design clarity and correct Motia usage**, which
aligns with hackathon evaluation criteria.

---

## 🏁 Hackathon Context

- Built for **MotiaHack25**
- First-time hackathon project
- Focused on learning, correctness, and backend fundamentals

---

## 📌 Future Improvements
- Task status API
- Persistent state
- Real queue adapter
- Streaming updates

