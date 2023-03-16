# (17) React Hook

## Definisi

Hooks adalah function pada react yang dapat menggunakan fungsionalitas dari react seperti state dan lifecycle. Dengan hooks, fitur-fitur tersebit dapat digunakan dalam sebuah function component dan tidak perlu menggunakan sebuah class component. Penamaan hooks biasanya diawali dengan keyword `use`, misalnya `useState()`

## Macam-macam Hooks

Terdapat beberapa macam hooks yang sudah disediakan secara default oleh react. Hooks yang umumnya sering digunakan antara lain:

- `useState()`
- `useEffect()`
- `useContext()`
- `useRef()`
- `useCallback()`

## Custom Hooks

Custom hooks merupakan hooks yang dibuat sendiri seusai dengan fungsi yang diinginkan. Dengan custom hooks dapat dibuat fungsi yang dapat digunakan kembali ketika memiliki logika yang digunakan secara berulang di banyak komponen. Dalam membuat sebuah custom hook perlu diperhatikan bahwa penamaan sebuah hook diawali dengan keyword `use`.
