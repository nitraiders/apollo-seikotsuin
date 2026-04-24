<?php
/**
 * deploy_theme.php
 * theme.css をサーバーに上書きデプロイするスクリプト
 */

$css_content = <<<CSS
/* 
  Apollo Seikotsuin - Modern Design System v2 (Deployed via PHP)
  Color Palette: Forest Green & Gold
*/

:root {
  --primary-green: #2d5a27;
  --accent-green: #4caf50;
  --bg-green-light: #f1f8f1;
  --text-dark: #1a2619;
  --text-muted: #5d6d5c;
  --white: #ffffff;
  --off-white: #f9fbf9;
  --gold: #d4af37;
  --line-green: #06c755;
  --shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  --shadow-hover: 0 8px 24px rgba(0, 0, 0, 0.12);
  --container-width: 1000px;
}

/* Reset & Base */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: "Helvetica Neue", Arial, "Hiragino Kaku Gothic ProN", "Hiragino Sans", Meiryo, sans-serif;
  color: var(--text-dark);
  background-color: var(--off-white);
  line-height: 1.7;
  padding-bottom: 70px;
}

a {
  text-decoration: none;
  color: inherit;
  transition: opacity 0.3s ease;
}

a:hover {
  opacity: 0.8;
}

img {
  max-width: 100%;
  height: auto;
  display: block;
}

.container {
  max-width: var(--container-width);
  margin: 0 auto;
  padding: 0 20px;
}

/* Header */
.header {
  background: var(--white);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  position: sticky;
  top: 0;
  z-index: 100;
  padding: 15px 0;
}

.header__inner {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.header__logo img {
  height: 50px;
}

/* Main Visual (Hero) */
.mv {
  position: relative;
  height: 450px;
  background: url('images/main_visual.jpg') center/cover no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
}

.mv::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
}

.mv__inner {
  position: relative;
  z-index: 1;
  text-align: center;
  color: var(--white);
  padding: 0 20px;
}

.mv__title {
  font-size: 2.8rem;
  font-weight: bold;
  margin-bottom: 15px;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
}

.mv__text {
  font-size: 1.2rem;
  font-weight: 500;
  text-shadow: 0 2px 6px rgba(0, 0, 0, 0.5);
}

/* Sections */
section {
  padding: 80px 0;
}

.section-title {
  font-size: 2rem;
  text-align: center;
  margin-bottom: 50px;
  color: var(--primary-green);
  position: relative;
  padding-bottom: 15px;
}

.section-title::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 60px;
  height: 3px;
  background: var(--accent-green);
}

/* Coupons */
.coupons {
  background-color: var(--bg-green-light);
}

.coupon-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
}

.coupon-card {
  background: var(--white);
  border-radius: 12px;
  overflow: hidden;
  box-shadow: var(--shadow);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  display: flex;
  flex-direction: column;
}

.coupon-card:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-hover);
}

.coupon-card__header {
  padding: 20px;
  background: var(--primary-green);
  color: var(--white);
}

.coupon-tag {
  display: inline-block;
  background: var(--accent-green);
  font-size: 0.8rem;
  padding: 2px 10px;
  border-radius: 4px;
  margin-bottom: 10px;
}

.coupon-card__title {
  font-size: 1.2rem;
  line-height: 1.4;
}

.coupon-card__body {
  padding: 25px 20px;
  flex-grow: 1;
}

.coupon-price {
  font-size: 1.8rem;
  font-weight: bold;
  color: var(--primary-green);
  margin-bottom: 10px;
}

.coupon-desc {
  font-size: 0.95rem;
  color: var(--text-muted);
}

.coupon-card__footer {
  padding: 20px;
  border-top: 1px dashed #eee;
}

/* Buttons */
.btn {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding: 12px 24px;
  border-radius: 50px;
  font-weight: bold;
  text-align: center;
  cursor: pointer;
  border: none;
}

.btn--line {
  background-color: var(--line-green);
  color: var(--white);
}

.btn--full {
  width: 100%;
}

/* Salon Data */
.salon-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  align-items: center;
}

.salon-table {
  width: 100%;
  border-collapse: collapse;
}

.salon-table th, .salon-table td {
  padding: 15px;
  border-bottom: 1px solid #e0e6e0;
  text-align: left;
}

.salon-table th {
  background-color: #f5f8f5;
  width: 30%;
  color: var(--primary-green);
}

.salon-map iframe {
  border-radius: 12px;
  box-shadow: var(--shadow);
}

/* Reviews */
.reviews {
  background-color: #fff;
}

.review-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 30px;
}

.review-item {
  background: var(--bg-green-light);
  padding: 30px;
  border-radius: 15px;
  position: relative;
}

.review-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
}

.review-user {
  font-weight: bold;
  font-size: 0.9rem;
}

.stars {
  color: #ff9800;
  font-weight: bold;
}

.review-text {
  font-size: 0.95rem;
  font-style: italic;
  color: var(--text-dark);
}

/* Bottom Bar (Mobile Floating) */
.bottom-bar {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  display: flex;
  z-index: 200;
}

.bottom-bar__btn {
  flex: 1;
  text-align: center;
  padding: 15px 0;
  color: var(--white);
  font-weight: bold;
  font-size: 1.1rem;
}

.bottom-bar__btn--tel {
  background-color: var(--primary-green);
}

.bottom-bar__btn--line {
  background-color: var(--line-green);
}

/* Footer */
.footer {
  background-color: var(--primary-green);
  color: var(--white);
  padding: 40px 0;
  text-align: center;
}

.footer__inner p {
  font-size: 0.9rem;
  opacity: 0.8;
}

/* Responsive */
@media (max-width: 768px) {
  .header__logo img {
    height: 40px;
  }
  
  .mv {
    height: 350px;
  }
  
  .mv__title {
    font-size: 2.2rem;
  }
  
  .salon-grid {
    grid-template-columns: 1fr;
  }
  
  .review-list {
    grid-template-columns: 1fr;
  }
  
  .section-title {
    font-size: 1.6rem;
  }
}
CSS;

if (file_put_contents('theme.css', $css_content)) {
    echo "Success: theme.css has been updated.";
} else {
    echo "Error: Failed to write theme.css.";
}
?>
