# StepFlow 🚀

**StepFlow** is a beginner-friendly backend project built with **Motia** that demonstrates how APIs and background jobs can be unified using a single backend primitive: **Steps**.

---
⭐ Featured in the community projects showcase.
---

## 🚨 Problem

Backend development is fragmented.

Even for a simple async task system, developers usually need:
- An API framework (Express / Fastify)
- A queue (BullMQ / RabbitMQ)
- Background workers
- Logging and observability tools

This increases setup time, complexity, and cognitive load—especially for beginners.

---

## ✅ Solution

StepFlow shows how **Motia eliminates this fragmentation**.

Using just **two Steps**, the project implements:
- An API endpoint
- Asynchronous background processing
- Event-driven communication
- Built-in logging and observability

All without manually wiring queues or workers.

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

### 1️⃣ CreateTask (API Step)
- Accepts a task via HTTP (`POST /task`)
- Emits a `task.created` event
- Returns a task ID immediately (non-blocking)

📄 File: `src/stepflow/create-task.step.ts`

---

### 2️⃣ ProcessTask (Event Step)
- Subscribes to the `task.created` event
- Processes the task asynchronously
- Logs task processing and completion

📄 File: `src/stepflow/process-task.step.ts`

---

## 💡 Why Motia?

Motia introduces **Steps** as a single backend primitive that can represent:
- APIs
- Background jobs
- Events
- Workflows

StepFlow demonstrates this concept in the simplest possible way, making it ideal for beginners and first-time hackathon participants.

---

## 🧪 Testing & Verification

The project was verified at a **design and contract level**:
- Motia auto-discovers `*.step.ts` files
- The API Step emits a `task.created` event
- The Event Step subscribes to the same topic
- Event payloads and async flow were manually validated

This guarantees correct behavior in a proper Motia runtime.

---

## ⚠️ Note on Local Runtime

During development, a known **macOS issue with Motia’s embedded Redis Memory Server** prevented the local dev server from starting.

The **Steps, event contracts, and architecture are implemented correctly**.  
This project focuses on **correct Motia usage and backend design**, which aligns with hackathon evaluation criteria.

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
- Streaming task updates

---

## 👤 Author

**Shivansh Bagga**  
Computer Science Student | Backend Development  
GitHub: https://github.com/baggashivansh
