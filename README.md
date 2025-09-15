Siap 🚀 aku buatin kamu file **README.md** yang rapi, terstruktur, dan gampang dipahami untuk belajar **React Basic** (Conditional, Data, Event, Logical & Operator).

---

## 📘 README.md — Belajar React Dasar

# Belajar React Dasar

Repository ini berisi catatan dan praktik dasar **React.js**, meliputi:

- Conditional Rendering
- Handling Data (props & state)
- Event Handling
- Logical & Operator di JSX

---

## 📦 Persiapan Project

1. Install Node.js dan npm/yarn
2. Buat project React:
   ```bash
   npx create-react-app project-basic
   cd project-basic
   npm start
   ```

````

3. Semua kode ada di folder `src/`.

---

## 1️⃣ Conditional Rendering

Conditional digunakan untuk menampilkan komponen berdasarkan kondisi.

### Contoh

```jsx
function MadeGoal() {
  return <h1>GOAL!</h1>;
}

function MissedGoal() {
  return <h1>MISSED!</h1>;
}

function Goal(props) {
  const isGoal = props.isGoal;
  if (isGoal) {
    return <MadeGoal />;
  }
  return <MissedGoal />;
}

export default function App() {
  return (
    <div>
      <Goal isGoal={true} />
      <Goal isGoal={false} />
    </div>
  );
}
```

### Hasil:

* `isGoal={true}` → GOAL!
* `isGoal={false}` → MISSED!

---

## 2️⃣ Handling Data (Props & State)

Data bisa dikirim menggunakan **props** atau disimpan di **state**.

### Props

```jsx
function Product(props) {
  return <p>{props.name} - {props.price}</p>;
}

export default function App() {
  return (
    <div>
      <Product name="Kopi" price="Rp 15.000" />
      <Product name="Teh" price="Rp 10.000" />
    </div>
  );
}
```

### State

```jsx
import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Jumlah: {count}</p>
      <button onClick={() => setCount(count + 1)}>Tambah</button>
    </div>
  );
}
```

---

## 3️⃣ Event Handling

Event digunakan untuk menangani interaksi user (klik, input, dll).

```jsx
function ButtonClick() {
  function handleClick() {
    alert("Tombol diklik!");
  }

  return <button onClick={handleClick}>Klik Saya</button>;
}
```

Atau dengan **arrow function**:

```jsx
<button onClick={() => alert("Hello React!")}>Klik</button>
```

---

## 4️⃣ Logical & Operator di JSX

### AND (`&&`)

Hanya tampil jika kondisi benar.

```jsx
const isLoggedIn = true;
return <div>{isLoggedIn && <p>Selamat datang!</p>}</div>;
```

### OR (`||`)

Gunakan nilai default jika kondisi salah.

```jsx
const username = "";
return <p>{username || "Guest"}</p>;
```

### Ternary (`? :`)

Ringkas dari `if else`.

```jsx
const isOnline = false;
return <p>{isOnline ? "Online" : "Offline"}</p>;
```

---

## 📌 Ringkasan

* **Conditional** → Menentukan tampilan berdasarkan kondisi (`if`, `ternary`, `&&`).
* **Data** → Props (dari luar) dan State (dari dalam komponen).
* **Event** → Menangani aksi user (`onClick`, `onChange`, dll).
* **Logical & Operator** → Gunakan `&&`, `||`, dan `? :` untuk logika ringkas di JSX.

---

## 🚀 Next Step

* Belajar **Looping JSX** (`map`) untuk menampilkan list data.
* Belajar **Form & Input** di React.
* Latihan project kecil: To-do List, Counter, atau Conditional Form.
````
