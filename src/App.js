import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomePage from './components/HomePage';
import ArticleListPage from './components/ArticleListPage';
import ArticlePage from './components/ArticlePage';
import './App.css';
import styles from './App.module.css';
function App() {
    return (
        <Router>
            <nav>
                <Link to="/">Главная</Link>
                <Link to="/articles">Статьи</Link>
            </nav>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/articles" element={<ArticleListPage />} />
                <Route path="/articles/:articleId" element={<ArticlePage />} />
            </Routes>
        </Router>
    );
}


// Применение стилей:
<nav className={styles.nav}>
    ...
</nav>

export default App;

