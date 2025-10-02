## ✅ TODO List

*Nota: se usa `PATCH` en lugar de `PUT` para actualizaciones parciales (corregir solo un dato). Los endpoints de Customer y Employee ya están terminados.*

### 🔐 Autenticación

- [ ] Crear endpoint: `POST /auth/customer/login`
- [ ] Crear endpoint: `POST /auth/employee/login`

### 👤 Customer

- [x] `POST /customers`
- [x] `GET /customers`
- [x] `GET /customers/:id`
- [x] `PATCH /customers/:id`
- [x] `DELETE /customers/:id`

### 👨‍🍳 Employee

- [x] `POST /employees`
- [x] `GET /employees`
- [x] `GET /employees/:id`
- [x] `PATCH /employees/:id`
- [x] `DELETE /employees/:id`

### 🍔 Product

- [x] `POST /products`
- [x] `GET /products`
- [x] `GET /products/:id`
- [x] `PATCH /products/:id`
- [x] `DELETE /products/:id`
- [x] `GET /products/available`

### 🛒 Cart

- [ ] `POST /carts`
- [ ] `GET /carts`
- [ ] `GET /carts/:id`
- [ ] `PATCH /carts/:id`
- [ ] `DELETE /carts/:id`
- [ ] `POST /carts/:id/add`
- [ ] `POST /carts/:id/remove`
- [ ] `POST /carts/:id/clear`
- [ ] `GET /carts/customer/:customerId`

### 📦 Order

- [ ] `POST /orders`
- [ ] `GET /orders`
- [ ] `GET /orders/:id`
- [ ] `PATCH /orders/:id`
- [ ] `DELETE /orders/:id`
- [ ] `POST /orders/from-cart/:cartId`
- [ ] `GET /orders/customer/:customerId`
- [ ] `GET /orders/employee/:employeeId`
- [ ] `PATCH /orders/:id/status`

### 💳 Payment

- [ ] `POST /payments`
- [ ] `GET /payments`
- [ ] `GET /payments/:id`
- [ ] `PATCH /payments/:id`
- [ ] `DELETE /payments/:id`
- [ ] `POST /payments/process`
- [ ] `GET /payments/order/:orderId`

### 🌱 Seed

- [ ] Generar seed para productos
