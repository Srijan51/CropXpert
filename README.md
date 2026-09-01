# 🌾 CropXpert — AI-Powered Crop Disease & Pest Detection Advisory System

CropXpert is an intelligent, full-stack platform that empowers farmers and agricultural extension workers with **real-time crop disease identification**, **pest detection & counting**, **weather-driven outbreak risk forecasting**, and **multilingual treatment advisories** — all powered by state-of-the-art computer vision, machine learning, and large language models. Designed as a companion system to [Agriva](https://github.com/your-org/agriva) (a crop planning platform), CropXpert extends the agricultural workflow from planning to active crop health management.

> **Built for:** Smart India Hackathon (Maharashtra State Innovation Society — Problem Statement PS-26131)

---

## ✨ Key Features

- 📸 **Image-Based Disease Identification** — Upload a photo of an affected crop leaf/stem; get instant disease classification with severity estimation (mild / moderate / severe)
- 🐛 **Pest Detection & Counting** — Detect and localize pests from field photos or sticky-trap images using YOLOv8/v11 object detection
- 🌦️ **Outbreak Risk Forecasting** — Weather-driven XGBoost models predict disease/pest outbreak probability for the next 3–7 days
- 🗺️ **Geospatial Hotspot Mapping** — Interactive Leaflet + CartoDB maps showing real-time disease/pest hotspots across regions
- 💊 **IPM Recommendations & Safe Dosage Guidance** — AI-generated Integrated Pest Management advisories with pesticide dosage calculations
- 🔗 **Extension Officer Referral Workflow** — Escalate complex cases to nearby extension officers or labs with one tap
- 🔄 **Follow-Up Monitoring & Active Learning** — Track crop recovery; field confirmations feed back into model retraining
- 🌐 **Multilingual Advisories** — Full support for English, Hindi (हिन्दी), and Marathi (मराठी) with text-to-speech
- 📊 **Extension-Worker Dashboard** — Validate AI diagnoses, manage referrals, and monitor field outcomes
- 🛡️ **Officer Surveillance Dashboard** — Regional disease/pest surveillance with aggregated analytics
- 📱 **Offline-First PWA** — Works in low-connectivity rural areas with service workers and on-device inference (ONNX/TFLite)

---

## 🏗️ Tech Stack

| Layer | Technologies |
|---|---|
| **Frontend** | React 18, Vite, TypeScript, Tailwind CSS, Leaflet + CartoDB, react-i18next, PWA / Service Workers |
| **Backend** | Python 3.11+, FastAPI, Uvicorn, HTTPX, SQLAlchemy (async), Celery + Redis |
| **Database** | PostgreSQL + PostGIS (geospatial) |
| **ML / CV** | PyTorch, timm (EfficientNet-B0/B3, MobileNetV3), YOLOv8/v11 (Ultralytics), XGBoost, Scikit-learn, ONNX, TFLite, MLflow |
| **AI / LLM** | Groq-hosted Llama 3.3 70B (advisory generation, translation, chat) |
| **Storage** | S3-compatible / MinIO (crop image uploads) |
| **Notifications** | Firebase Cloud Messaging / Twilio SMS (risk alerts, follow-up reminders) |
| **Infra** | Docker Compose, GitHub Actions CI |

---

## 📁 Project Structure

```
CropXpert/
├── frontend/                   # React 18 + Vite + TypeScript
│   ├── public/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/         # Shared UI components
│   │   ├── features/           # Feature-based modules
│   │   │   ├── detection/      # Disease/pest image upload & results
│   │   │   ├── forecasting/    # Outbreak risk dashboard
│   │   │   ├── hotspot-map/    # Geospatial hotspot mapping
│   │   │   ├── advisory/       # Treatment recommendations
│   │   │   ├── referral/       # Extension officer referral
│   │   │   ├── monitoring/     # Follow-up & active learning
│   │   │   └── dashboard/      # Extension-worker & officer dashboards
│   │   ├── hooks/
│   │   ├── services/           # API client layer
│   │   ├── i18n/               # Multilingual (en, hi, mr)
│   │   ├── store/              # State management
│   │   ├── types/
│   │   └── utils/
│   ├── package.json
│   ├── vite.config.ts
│   ├── tailwind.config.ts
│   ├── tsconfig.json
│   └── index.html
├── backend/                    # FastAPI (Python 3.11+)
│   ├── app/
│   │   ├── api/                # API routers by domain
│   │   │   ├── detection/
│   │   │   ├── forecasting/
│   │   │   ├── advisory/
│   │   │   ├── hotspot/
│   │   │   ├── referral/
│   │   │   ├── monitoring/
│   │   │   ├── users/
│   │   │   └── dashboard/
│   │   ├── core/               # Config, security, dependencies
│   │   ├── models/             # SQLAlchemy ORM models
│   │   ├── schemas/            # Pydantic request/response schemas
│   │   ├── services/           # Business logic layer
│   │   ├── tasks/              # Celery async tasks
│   │   └── utils/
│   ├── alembic/                # DB migrations
│   ├── tests/
│   ├── requirements.txt
│   └── Dockerfile
├── ml/                         # ML training & inference pipeline
│   ├── data/
│   ├── notebooks/
│   ├── training/
│   │   ├── disease_classifier/
│   │   ├── pest_detector/
│   │   └── outbreak_forecaster/
│   ├── inference/
│   ├── models/                 # Exported model artifacts
│   ├── configs/
│   └── requirements.txt
├── docker-compose.yml
├── .env.example
├── .gitignore
├── LICENSE
└── README.md
```

---

## 🚀 Local Development Setup

### Prerequisites

- Python 3.11+
- Node.js 18+ & npm
- PostgreSQL 15+ with PostGIS extension
- Redis
- Docker & Docker Compose (recommended)

### 1. Clone the Repository

```bash
git clone https://github.com/your-org/CropXpert.git
cd CropXpert
```

### 2. Environment Configuration

```bash
cp .env.example .env
```

Edit `.env` and fill in the required values:

```env
# Required
GROQ_API_KEY=your_groq_api_key_here
DATABASE_URL=postgresql+asyncpg://cropxpert:cropxpert@localhost:5432/cropxpert
REDIS_URL=redis://localhost:6379/0

# Optional
MINIO_ACCESS_KEY=minioadmin
MINIO_SECRET_KEY=minioadmin
FCM_SERVER_KEY=your_firebase_key
TWILIO_ACCOUNT_SID=your_twilio_sid
TWILIO_AUTH_TOKEN=your_twilio_token
```

### 3. Backend Setup

```bash
cd backend
python -m venv venv

# Windows
venv\Scripts\activate
# macOS/Linux
source venv/bin/activate

pip install -r requirements.txt

# Run database migrations
alembic upgrade head

# Start the FastAPI server
uvicorn app.main:app --reload --port 8000
```

### 4. Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

The frontend will be available at `http://localhost:5173` and the API at `http://localhost:8000/docs`.

### 5. Using Docker Compose (Recommended)

```bash
docker-compose up --build
```

This starts all services: backend, frontend, PostgreSQL + PostGIS, Redis, and MinIO.

---

## 🧪 Running Tests

```bash
# Backend tests
cd backend
pytest

# Frontend tests
cd frontend
npm test
```

---

## 🤝 Contributing

We welcome contributions! Here's how to get started:

1. **Fork** the repository
2. **Create** a feature branch: `git checkout -b feature/your-feature-name`
3. **Commit** your changes: `git commit -m 'feat: add your feature'`
4. **Push** to the branch: `git push origin feature/your-feature-name`
5. **Open** a Pull Request

### Guidelines

- Follow the existing code style and project structure
- Write tests for new features
- Use [Conventional Commits](https://www.conventionalcommits.org/) for commit messages
- Update documentation when adding new features

---

## 📄 License

This project is licensed under the MIT License — see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgements

- [PlantVillage Dataset](https://plantvillage.psu.edu/) for disease image training data
- [Ultralytics](https://ultralytics.com/) for YOLOv8/v11
- [Groq](https://groq.com/) for blazing-fast LLM inference
- [Maharashtra State Innovation Society](https://msins.in/) for the problem statement
- The [Agriva](https://github.com/your-org/agriva) team for the crop planning foundation
