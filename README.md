# 🏥 Medical Travellers On-Call Dashboard

PWA Dashboard untuk register & monitoring kunjungan on-call  
**Operated by Surya Husadha Nusa Dua**

---

## 🚀 Quick Setup

### 1. Deploy ke GitHub Pages

```bash
# Clone / upload repo ke GitHub
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/YOUR_USERNAME/mt-oncall.git
git push -u origin main
```

Lalu di GitHub:
- Settings → Pages → Source: **Deploy from branch** → `main` → `/root`
- URL akan jadi: `https://YOUR_USERNAME.github.io/mt-oncall/`

---

### 2. Setup Google Apps Script (untuk Write ke Sheets)

1. Buka Google Sheets → **Extensions → Apps Script**
2. Hapus kode yang ada, paste isi file **`apps-script.js`**
3. Klik **Deploy → New Deployment**
4. Type: **Web App**
5. Execute as: **Me**
6. Who has access: **Anyone**
7. Klik **Deploy** → Copy URL

---

### 3. Buka Dashboard

1. Buka URL GitHub Pages
2. Klik ⚙️ Settings (pojok kanan atas)
3. Paste **Apps Script URL** → Save

---

### 4. Share Google Sheets sebagai Publik (untuk READ)

1. Buka Google Sheets
2. Share → **Anyone with the link** → **Viewer**

---

## 📱 Install sebagai PWA

- **Android**: Chrome → Menu → "Add to Home Screen"
- **iOS**: Safari → Share → "Add to Home Screen"
- **Desktop**: Chrome → Address bar → Install icon

---

## 📋 Kolom Data

| Kolom | Field |
|-------|-------|
| No. | Auto-generated |
| Service Date | Tanggal kunjungan |
| Patient Name | Nama pasien |
| Location | Hotel/Villa/Alamat |
| Diagnose | Diagnosis/keluhan |
| Doctor Name | Nama dokter |
| Nurse Name | Nama perawat |
| Driver Name | Nama driver |
| Appointment Time | Jam janjian |
| Actual Arrival Time | Jam tiba aktual |
| Arrival Status | On Time / Late / Early |
| Delay (minutes) | Keterlambatan (menit) |
| Completion Time | Jam selesai |
| Treatment Duration | Durasi tindakan (menit) |
| 24h WA Follow Up Status | Status follow up WA |
| Detail Follow Up Result | Detail hasil follow up |

---

## 🛠 Tech Stack

- Pure HTML/CSS/JS — no framework
- PWA (offline support via Service Worker)
- Google Sheets sebagai database
- Google Apps Script sebagai backend API

---

*Medical Travellers On-Call © Surya Husadha Nusa Dua*
