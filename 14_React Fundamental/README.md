# (14) React Fundamental

## JSX

JSX merupakan singkatan dari Javascript XML. JSX berfungsi untuk menuliskan tag-tag HTML di dalam javascript. Dengan menggunakan JSX akan memudahkan dalam membuat react element. Contoh penggunaan dari JSX:

```javascript
const myElement = <h1>Hello world!</h1>;
```

contoh penulisan tanpa JSX:

```javascript
const myElement = React.createElement("h1", null, "Hello earth!");
```

## React Components

React component adalah sekumpulan kode yang telah tersusun untuk membuat sebuah komponen tertentu dalam user interface yang memiliki state tersendiri. React component dapat digunakan berulang-ulang sehingga akan meningkatkan efisiensi penulisan kode. React component dapat berbentuk function ataupun class.

## React Lifecycle

React lifecycle adalah sebuah siklus hidup yang dimiliki oleh setiap react element. Terdapat 3 fase dalam react lifecycle, yaitu: Mounting, Updating, dan Unmounting.
Dalam satu fase terdapat method-method yang akan dijalankan sesuai dengan urutannya. Urutan method yang akan dipanggil dalam setiap fase antara lain:

### Mounting

1. constructor()
2. getDerivedStateFromProps()
3. render()
4. componentDidMount()

### Updating

1. getDerivedStateFromProps()
2. shouldComponentUpdate()
3. render()
4. getSnapshotBeforeUpdate()
5. componentDidUpdate()

### Unmounting

1. componentWillUnmount()
