'use client';

import React, { useState, useEffect, useRef } from 'react';
import { 
  ShoppingBag, ArrowRight, Menu, ArrowDown, Star, Plus, Box, 
  Triangle, Stethoscope, ShieldCheck, Baby, LayoutGrid, Sparkles, 
  HeartPulse, CheckCircle, Facebook, Linkedin, Instagram, ChevronDown, 
  ChevronLeft, ChevronRight, Check, HeartHandshake, Microscope, 
  Smile, Activity 
} from 'lucide-react';

const globalCss = `
  /* ==========================================================================
      WEB SIZING — COMPLETE REFERENCE SYSTEM
      ========================================================================== */
  :root {
      --primary: #2563EB;
      --primary-hover: #1D4ED8;
      --navy: #0A1628;
      --navy-light: #152A4A;
      --white: #FFFFFF;
      --bg-light: #F4F4F5;
      --text-main: #1F2937;
      --text-muted: #6B7280;
      --border: #E5E7EB;
      --green: #10B981;
      --glass-bg: rgba(255, 255, 255, 0.9);

      --spacing-xs: 4px;
      --spacing-sm: 8px;
      --spacing-md-s: 12px;
      --spacing-md: 16px;
      --spacing-md-l: 24px;
      --spacing-lg: 32px;
      --spacing-xl: 48px;
      --spacing-2xl: 64px;
      --spacing-3xl: 80px;
      --spacing-4xl: 120px;

      --shadow-sm:  0 1px 4px rgba(0,0,0,0.06);
      --shadow-md:  0 4px 16px rgba(0,0,0,0.08);
      --shadow-lg:  0 8px 32px rgba(0,0,0,0.10);
      --shadow-xl:  0 16px 48px rgba(0,0,0,0.12);
      --shadow-card-mobile: 0 2px 12px rgba(0,0,0,0.06);
      --shadow-card-desktop: 0 4px 24px rgba(0,0,0,0.08);

      --radius-sm: 4px;
      --radius-md: 8px;
      --radius-card-mobile: 12px;
      --radius-card-desktop: 16px;
      --radius-lg: 24px;
      --radius-pill: 999px;

      --z-dropdown: 10;
      --z-sticky: 20;
      --z-overlay: 30;
      --z-modal: 40;
      --z-toast: 50;
      --z-alert: 100;

      --transition-smooth: all 0.4s cubic-bezier(0.25, 1, 0.5, 1);
  }

  * { margin: 0; padding: 0; box-sizing: border-box; }
  html { scroll-behavior: smooth; }

  body {
      font-family: 'Plus Jakarta Sans', sans-serif;
      color: var(--text-main);
      background-color: var(--white);
      font-size: 15px;
      line-height: 1.6;
      letter-spacing: 0;
      overflow-x: hidden;
      opacity: 0;
      transition: opacity 0.8s ease-in;
  }
  body.loaded { opacity: 1; }

  @media (min-width: 768px) { body { font-size: 16px; } }
  @media (min-width: 1024px) { body { font-size: 17px; } }

  h1, h2, h3, h4, h5, h6 {
      font-family: 'Plus Jakarta Sans', sans-serif;
      color: var(--navy);
      font-weight: 700;
      letter-spacing: -0.01em;
      line-height: 1.15;
  }
  @media (min-width: 1024px) { h1, h2, h3, h4, h5, h6 { letter-spacing: -0.02em; } }
  p { max-width: 100%; }
  @media (min-width: 1024px) { p { max-width: 75ch; } }
  a { text-decoration: none; color: inherit; }
  ul { list-style: none; }
  img { max-width: 100%; height: auto; display: block; object-fit: cover; }

  .container { width: 100%; margin: 0 auto; padding: 0 16px; max-width: 1240px; }
  @media (min-width: 768px) { .container { padding: 0 24px; } }
  @media (min-width: 1024px) { .container { padding: 0 32px; } }

  .section { padding: 56px 0; position: relative; }
  @media (min-width: 768px) { .section { padding: 80px 0; } }
  @media (min-width: 1024px) { .section { padding: 100px 0; } }

  .bg-light { background-color: var(--bg-light); }
  .text-center { text-align: center; }

  .grid { display: grid; gap: 16px; }
  @media (min-width: 768px) { .grid { gap: 24px; } }
  @media (min-width: 1024px) { .grid { gap: 28px; } }

  .grid-cols-2 { grid-template-columns: 1fr; }
  @media (min-width: 768px) { .grid-cols-2 { grid-template-columns: 1fr 1fr; } }
  .grid-cols-3 { grid-template-columns: 1fr; }
  @media (min-width: 768px) { .grid-cols-3 { grid-template-columns: 1fr 1fr; } }
  @media (min-width: 1024px) { .grid-cols-3 { grid-template-columns: repeat(3, 1fr); } }
  .grid-cols-4 { grid-template-columns: 1fr; }
  @media (min-width: 768px) { .grid-cols-4 { grid-template-columns: repeat(2, 1fr); } }
  @media (min-width: 1024px) { .grid-cols-4 { grid-template-columns: repeat(4, 1fr); } }
  .grid-cols-appoint { grid-template-columns: 1fr; }
  @media (min-width: 1024px) { .grid-cols-appoint { grid-template-columns: 1fr 1.2fr; gap: var(--spacing-3xl); } }

  .text-display, .text-h1 { font-size: 32px; line-height: 1.15; }
  .text-h2 { font-size: 24px; line-height: 1.15; }
  .text-h3 { font-size: 20px; line-height: 1.15; }
  .text-h4 { font-size: 18px; line-height: 1.15; }
  .text-large { font-size: 16px; }
  .text-small { font-size: 13px; }

  @media (min-width: 768px) {
      .text-display, .text-h1 { font-size: 44px; }
      .text-h2 { font-size: 32px; }
      .text-h3 { font-size: 24px; }
      .text-h4 { font-size: 20px; }
  }
  @media (min-width: 1024px) {
      .text-display, .text-h1 { font-size: 60px; }
      .text-h2 { font-size: 44px; }
      .text-h3 { font-size: 28px; }
      .text-h4 { font-size: 24px; }
      .text-large { font-size: 18px; }
      .text-small { font-size: 14px; }
  }

  .section-header { margin-bottom: var(--spacing-xl); }
  @media (min-width: 1024px) { .section-header { margin-bottom: var(--spacing-3xl); } }
  .section-subtitle { margin: 0 auto; color: var(--text-muted); }
  
  .page-header { 
      padding: 160px 0 80px; 
      background: linear-gradient(180deg, #F8FAFC 0%, var(--white) 100%); 
      text-align: center; 
      position: relative; 
      overflow: hidden;
      border-bottom: 1px solid rgba(229, 231, 235, 0.4);
  }
  @media (min-width: 1024px) { .page-header { padding: 200px 0 100px; } }
  .page-header-glow {
      position: absolute; top: -150px; left: 50%; transform: translateX(-50%);
      width: 800px; height: 800px; background: radial-gradient(circle, rgba(37,99,235,0.06) 0%, transparent 70%);
      border-radius: 50%; pointer-events: none; z-index: 0;
  }
  .page-header .container { position: relative; z-index: 1; display: flex; flex-direction: column; align-items: center; }
  .page-header h1 { margin-bottom: var(--spacing-md); color: var(--navy); max-width: 800px; }
  .page-header p { margin: 0 auto; color: var(--text-muted); max-width: 600px; }

  .card {
      background: var(--white); border-radius: var(--radius-card-mobile); padding: var(--spacing-md-l);
      border: 1px solid var(--border); box-shadow: var(--shadow-card-mobile); transition: var(--transition-smooth);
  }
  @media (min-width: 1024px) { .card { border-radius: var(--radius-card-desktop); padding: var(--spacing-lg); box-shadow: var(--shadow-card-desktop); } }
  .card:hover { transform: translateY(-4px); box-shadow: var(--shadow-md); border-color: var(--primary); }

  .btn {
      display: inline-flex; align-items: center; justify-content: center; height: 48px; padding: 0 var(--spacing-md-l);
      border-radius: var(--radius-pill); font-family: inherit; font-weight: 600; font-size: 15px;
      cursor: pointer; transition: var(--transition-smooth); gap: var(--spacing-sm); border: none;
  }
  @media (min-width: 1024px) { .btn { height: 52px; padding: 0 var(--spacing-lg); font-size: 16px; } }
  .btn-primary { background-color: var(--primary); color: var(--white); }
  .btn-primary:hover { background-color: var(--primary-hover); transform: translateY(-2px); box-shadow: 0 10px 20px rgba(37, 99, 235, 0.2); }
  .btn-white { background-color: var(--white); color: var(--navy); }
  .btn-white:hover { transform: translateY(-2px); box-shadow: var(--shadow-md); }
  .btn-glass { background-color: rgba(255,255,255,0.2); color: var(--white); border: 1px solid rgba(255,255,255,0.3); backdrop-filter: blur(8px); }
  .btn-glass:hover { background-color: var(--white); color: var(--navy); }
  .btn-outline { background-color: transparent; color: var(--navy); border: 2px solid var(--border); }
  .btn-outline:hover { background-color: var(--navy); color: var(--white); border-color: var(--navy); }

  .btn-animated-fill { position: relative; overflow: hidden; }
  .btn-animated-fill > span, .btn-animated-fill > svg, .btn-animated-fill > i { position: relative; z-index: 10; transition: transform 0.3s; }
  .btn-animated-fill::after { content: ''; position: absolute; inset: 0; background: rgba(255, 255, 255, 0.2); transform: translateY(100%); transition: transform 0.3s ease-out; z-index: 1; }
  .btn-animated-fill:hover::after { transform: translateY(0); }
  .btn-animated-fill:active { transform: scale(0.97) !important; }
  .btn-animated-fill:hover > svg, .btn-animated-fill:hover > i { transform: translateX(4px); }

  .btn-nav-animated { position: relative; overflow: hidden; z-index: 1; }
  .btn-nav-animated::before {
      content: ''; width: 0; height: 100%; border-radius: var(--radius-pill); position: absolute;
      top: 0; left: 0; background-image: linear-gradient(to right, var(--primary-hover) 0%, var(--navy) 100%);
      transition: .5s ease; display: block; z-index: -1;
  }
  .btn-nav-animated:hover::before { width: 100%; }

  .form-group { position: relative; width: 100%; display: block; }
  .form-group.full-width { grid-column: 1 / -1; }
  .form-control {
      background-color: var(--bg-light); color: var(--text-main); width: 100%;
      padding: 24px 16px 8px 16px; outline: 0; border: 1px solid transparent;
      border-radius: var(--radius-md); font-family: inherit; font-size: 16px !important; 
      transition: var(--transition-smooth); box-shadow: inset 0 2px 4px rgba(0,0,0,0.02);
  }
  @media (min-width: 1024px) { .form-control { padding: 26px 16px 10px 16px; } }
  textarea.form-control { min-height: 140px; resize: vertical; }
  .form-control:focus { background-color: var(--white); border-color: var(--primary); box-shadow: 0 0 0 4px rgba(37, 99, 235, 0.1); }
  .form-label {
      position: absolute; left: 16px; top: 0px; color: var(--text-muted);
      font-size: 12px; font-weight: 700; cursor: text; transition: 0.3s ease; pointer-events: none;
  }
  .form-control:placeholder-shown + .form-label, select.form-control:invalid + .form-label { top: 16px; font-size: 16px; font-weight: 500; }
  .form-control:focus + .form-label, .form-control:valid:not(:placeholder-shown) + .form-label,
  select.form-control:focus + .form-label, select.form-control:valid + .form-label { color: var(--primary); top: 6px; font-size: 11px; font-weight: 700; }

  .img-doctor { width: 100%; height: 100%; object-fit: cover; aspect-ratio: 4 / 5; border-radius: var(--radius-card-mobile); }
  .img-service { width: 100%; height: 100%; object-fit: cover; aspect-ratio: 10 / 7; border-radius: var(--radius-card-mobile); }
  @media (min-width: 1024px) { .img-doctor { border-radius: var(--radius-card-desktop); } .img-service { border-radius: var(--radius-card-desktop); } }

  .progress-wrap {
      position: fixed; right: 24px; bottom: 24px; height: 50px; width: 50px; cursor: pointer; display: block; border-radius: 50px;
      box-shadow: inset 0 0 0 2px rgba(37,99,235,0.1); z-index: 10000; opacity: 0; visibility: hidden;
      transform: translateY(20px); transition: all 0.3s ease; background-color: rgba(255, 255, 255, 0.9); backdrop-filter: blur(4px);
  }
  .progress-wrap.active-progress { opacity: 1; visibility: visible; transform: translateY(0); }
  .progress-wrap::after {
      position: absolute; content: '\\2191'; text-align: center; line-height: 50px; font-size: 20px; font-weight: bold;
      color: var(--primary); left: 0; top: 0; height: 50px; width: 50px; cursor: pointer; display: block; z-index: 1; transition: all 0.3s ease;
  }
  .progress-wrap:hover::after { color: var(--white); transform: translateY(-3px); }
  .progress-wrap:hover { background-color: var(--primary); box-shadow: 0 10px 20px rgba(37, 99, 235, 0.2); }
  .progress-wrap svg path { fill: none; }
  .progress-wrap svg.progress-circle path { stroke: var(--primary); stroke-width: 4; box-sizing: border-box; transition: all 0.3s ease; }
  .progress-wrap:hover svg.progress-circle path { stroke: var(--white); }

  #loader {
      position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: var(--white); display: flex; align-items: center; justify-content: center;
      z-index: var(--z-alert); transition: transform 0.8s cubic-bezier(0.7, 0, 0.3, 1), opacity 0.8s ease;
  }
  .dots-container { display: flex; align-items: center; justify-content: center; }
  .dot { height: 20px; width: 20px; margin-right: 10px; border-radius: 10px; background-color: #b3d4fc; animation: pulse 1.5s infinite ease-in-out; }
  .dot:last-child { margin-right: 0; }
  .dot:nth-child(1) { animation-delay: -0.3s; }
  .dot:nth-child(2) { animation-delay: -0.1s; }
  .dot:nth-child(3) { animation-delay: 0.1s; }
  @keyframes pulse {
      0%, 100% { transform: scale(0.8); background-color: #b3d4fc; box-shadow: 0 0 0 0 rgba(178, 212, 252, 0.7); }
      50% { transform: scale(1.2); background-color: var(--primary); box-shadow: 0 0 0 10px rgba(178, 212, 252, 0); }
  }

  .page-transition-overlay {
      position: fixed; top: 0; left: 0; width: 100%; height: 100vh; z-index: var(--z-alert); pointer-events: none; background: var(--bg-light);
      opacity: 0; transition: opacity 0.4s ease-in-out;
  }
  body.is-transitioning .page-transition-overlay { opacity: 1; pointer-events: all; }
  .page-section { display: none; opacity: 0; transition: opacity 0.6s ease; }
  .page-section.active { display: block; opacity: 1; }

  .navbar {
      position: absolute; top: var(--spacing-md); left: var(--spacing-md); right: var(--spacing-md); height: 64px; padding: 0 var(--spacing-md);
      background: var(--white); border-radius: var(--radius-lg); z-index: var(--z-sticky); box-shadow: var(--shadow-md); display: flex; align-items: center; transition: var(--transition-smooth);
  }
  @media (min-width: 1024px) {
      .navbar { top: var(--spacing-md-l); left: 50%; right: auto; transform: translateX(-50%); width: calc(100% - var(--spacing-xl)); max-width: 1280px; height: 80px; padding: 0 var(--spacing-md-l); border-radius: var(--radius-pill); }
  }
  .navbar.scrolled { position: fixed; top: var(--spacing-sm); left: var(--spacing-md); right: var(--spacing-md); background: rgba(255,255,255,0.98); backdrop-filter: blur(10px); box-shadow: var(--shadow-lg); }
  @media (min-width: 1024px) { .navbar.scrolled { left: 50%; right: auto; top: var(--spacing-sm); } }
  .nav-container { display: flex; justify-content: space-between; align-items: center; width: 100%; }
  .logo { font-family: 'Manrope', sans-serif; font-size: 28px; font-weight: 800; color: var(--navy); display: flex; align-items: center; gap: 4px; letter-spacing: -0.04em; }
  @media (min-width: 1024px) { .logo { font-size: 32px; } }
  .logo sup { font-size: 0.8rem; font-weight: 600; color: var(--text-muted); }
  .logo span { color: var(--primary); }
  .nav-links { display: none; }
  @media (min-width: 1024px) { .nav-links { display: flex; gap: var(--spacing-lg); align-items: center; margin-left: auto; margin-right: var(--spacing-xl); } }
  .nav-links button { background: none; border: none; cursor: pointer; font-family: inherit; font-weight: 600; font-size: 15px; color: var(--text-main); transition: color 0.3s ease; display: flex; align-items: center; gap: 4px; padding: 0; }
  .nav-links button:hover, .nav-links button.active { color: var(--primary); }
  .nav-actions { display: flex; align-items: center; gap: var(--spacing-md); }
  .cart-btn { position: relative; width: 40px; height: 40px; border-radius: 50%; background: var(--bg-light); display: flex; align-items: center; justify-content: center; color: var(--navy); transition: var(--transition-smooth); cursor: pointer; }
  .cart-btn:hover { background: #E5E7EB; }
  .cart-badge { position: absolute; top: 0; right: 0; width: 16px; height: 16px; background: var(--primary); color: white; font-size: 11px; font-weight: bold; border-radius: 50%; display: flex; align-items: center; justify-content: center; }
  .nav-actions .btn { display: none; height: 40px; padding: 0 var(--spacing-md); font-size: 14px; }
  @media (min-width: 768px) { .nav-actions .btn { display: inline-flex; } }
  @media (min-width: 1024px) { .nav-actions .btn { height: 44px; padding: 0 var(--spacing-md-l); font-size: 15px; } }
  .mobile-toggle { display: block; background: none; border: none; color: var(--navy); cursor: pointer; padding: var(--spacing-sm); }
  @media (min-width: 1024px) { .mobile-toggle { display: none; } }

  .hero { position: relative; width: 100%; min-height: auto; aspect-ratio: 4 / 5; background: url('https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=1440&h=500&q=80') center/cover no-repeat; display: flex; align-items: center; padding-top: var(--spacing-4xl); }
  @media (min-width: 768px) { .hero { aspect-ratio: 4 / 3; } }
  @media (min-width: 1024px) { .hero { aspect-ratio: 16 / 7; } }
  .hero::before { content: ''; position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: linear-gradient(to right, rgba(10,22,40,0.8) 0%, rgba(10,22,40,0.4) 50%, rgba(10,22,40,0.1) 100%); }
  .hero-content-wrapper { position: relative; z-index: 2; width: 100%; }
  .hero-badge-top { display: inline-flex; align-items: center; gap: var(--spacing-md-s); background: rgba(255,255,255,0.15); backdrop-filter: blur(12px); border: 1px solid rgba(255,255,255,0.2); padding: var(--spacing-sm) var(--spacing-md-l) var(--spacing-sm) var(--spacing-sm); border-radius: var(--radius-pill); color: var(--white); font-weight: 500; font-size: 14px; margin-bottom: var(--spacing-lg); }
  .avatar-group { display: flex; }
  .avatar-group img { width: 32px; height: 32px; border-radius: 50%; border: 2px solid #2B3A55; margin-left: -12px; }
  .avatar-group img:first-child { margin-left: 0; }
  .hero-title { color: var(--white); max-width: 100%; }
  @media (min-width: 1024px) { .hero-title { max-width: 800px; } }
  .hero-desc { color: rgba(255,255,255,0.8); max-width: 100%; }
  @media (min-width: 1024px) { .hero-desc { max-width: 500px; } }
  .hero-buttons { display: flex; gap: var(--spacing-md); }
  .hero-right-cards { position: relative; display: flex; flex-direction: column; gap: var(--spacing-md); align-items: flex-start; margin-top: var(--spacing-xl); }
  @media (min-width: 1024px) { .hero-right-cards { position: absolute; right: 0; bottom: 0; flex-direction: row; align-items: flex-end; margin-top: 0; } }
  .glass-card-square { background: var(--glass-bg); backdrop-filter: blur(20px); border-radius: var(--radius-lg); padding: var(--spacing-lg); width: 100%; max-width: 280px; box-shadow: var(--shadow-lg); }
  .glass-card-square h5 { font-size: 14px; color: var(--text-muted); font-weight: 600; margin-bottom: var(--spacing-md); }
  .glass-card-square h2 { font-size: 40px; color: var(--navy); margin-bottom: var(--spacing-sm); }
  @media (min-width: 1024px) { .glass-card-square h2 { font-size: 56px; } }
  .glass-card-square p { font-size: 14px; color: var(--text-muted); line-height: 1.5; }
  .glass-card-tags { background: var(--glass-bg); backdrop-filter: blur(20px); border-radius: var(--radius-lg); padding: var(--spacing-lg); display: flex; flex-direction: column; gap: var(--spacing-md-s); width: 100%; max-width: 280px; }
  .tag-pill { display: flex; justify-content: space-between; align-items: center; padding: var(--spacing-md-s) var(--spacing-md-l); border-radius: var(--radius-pill); border: 1px solid var(--border); font-size: 14px; font-weight: 600; color: var(--text-main); }
  .tag-pill.active { background: var(--green); color: var(--white); border-color: var(--green); }

  .ticker-section { padding: var(--spacing-xl) 0; border-bottom: 1px solid var(--border); overflow: hidden; background: var(--white); }
  .ticker-title { text-align: center; font-size: 14px; font-weight: 600; color: var(--text-main); margin-bottom: var(--spacing-md-l); }
  .ticker-wrap { display: flex; width: 200%; animation: ticker 20s linear infinite; }
  .ticker-items { display: flex; width: 50%; justify-content: space-around; align-items: center; }
  .ticker-logo { font-family: 'Manrope', sans-serif; font-weight: 800; font-size: 24px; color: var(--navy); display: flex; align-items: center; gap: 4px; }
  @keyframes ticker { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }

  .service-card-new { background: var(--white); border-radius: var(--radius-lg); padding: var(--spacing-lg); box-shadow: 0 2px 20px -8px rgba(6, 81, 237, 0.1); border: 1px solid rgba(229, 231, 235, 0.6); transition: var(--transition-smooth); position: relative; z-index: 1; }
  .service-card-new:hover { transform: translateY(-4px); box-shadow: 0 8px 30px rgba(6, 81, 237, 0.12); }
  .service-icon-new { width: 64px; height: 64px; border-radius: 16px; background: #EFF6FF; display: flex; align-items: center; justify-content: center; margin-bottom: var(--spacing-md-l); transition: var(--transition-smooth); color: var(--primary); }
  .service-card-new:hover .service-icon-new { transform: scale(1.1); background: #DBEAFE; }

  .badge-pill { display: inline-block; padding: 6px 16px; border-radius: var(--radius-pill); background: var(--white); border: 1px solid var(--border); color: var(--primary); font-size: 14px; font-weight: 600; box-shadow: var(--shadow-sm); margin-bottom: var(--spacing-md); }
  .bg-gradient-glow { position: absolute; top: 0; left: 50%; transform: translateX(-50%); width: 800px; height: 400px; background: rgba(37, 99, 235, 0.15); filter: blur(120px); border-radius: 50%; pointer-events: none; z-index: 0; }
  
  .speciality-split { display: grid; grid-template-columns: 1fr; gap: var(--spacing-3xl); align-items: center; }
  @media (min-width: 1024px) { .speciality-split { grid-template-columns: 1fr 1fr; } }
  .speciality-img-wrapper { position: relative; width: 100%; }
  .speciality-img-offset { position: absolute; inset: 0; background: #EFF6FF; border-radius: 40px; transform: rotate(-3deg) scale(1.05); transform-origin: bottom left; z-index: 0; transition: transform 0.5s ease; }
  .speciality-img-wrapper:hover .speciality-img-offset { transform: rotate(0deg) scale(1.05); }
  .speciality-img { position: relative; z-index: 1; border-radius: 40px; width: 100%; height: 500px; object-fit: cover; border: 4px solid var(--white); box-shadow: var(--shadow-xl); }
  @media (min-width: 1024px) { .speciality-img { height: 600px; } }
  .trust-badge-float { position: absolute; bottom: -32px; right: -16px; background: var(--white); padding: var(--spacing-md-l); border-radius: var(--radius-lg); box-shadow: var(--shadow-xl); display: flex; align-items: center; gap: var(--spacing-md); z-index: 2; border: 1px solid var(--border); animation: bounce-slow 3s infinite alternate; }
  @media (min-width: 768px) { .trust-badge-float { right: -32px; } }
  @keyframes bounce-slow { 0% { transform: translateY(0); } 100% { transform: translateY(-15px); } }
  
  .speciality-list { margin-bottom: var(--spacing-xl); display: flex; flex-direction: column; gap: var(--spacing-md-l); }
  .speciality-list-item { display: flex; align-items: flex-start; gap: var(--spacing-md); cursor: default; }
  .speciality-list-icon { flex-shrink: 0; width: 28px; height: 28px; border-radius: 50%; background: #EFF6FF; display: flex; align-items: center; justify-content: center; color: var(--primary); transition: var(--transition-smooth); margin-top: 2px; }
  .speciality-list-item:hover .speciality-list-icon { background: var(--primary); color: var(--white); }

  .dentist-card-uiverse { position: relative; width: 100%; max-width: 400px; background: url('https://picsum.photos/seed/dentistvipul/400/533') center/cover; display: flex; align-items: center; justify-content: center; font-size: 24px; font-weight: 700; cursor: pointer; margin: 0 auto; }
  .dentist-card-uiverse::before, .dentist-card-uiverse::after { position: absolute; content: ""; width: 20%; height: 20%; display: flex; align-items: center; justify-content: center; font-size: 24px; font-weight: 700; background-color: var(--primary); color: var(--white); transition: var(--transition-smooth); z-index: 2; }
  .dentist-card-uiverse::before { top: 0; right: 0; border-radius: 0 var(--radius-card-desktop) 0 100%; opacity: 0.95; }
  .dentist-card-uiverse::after { bottom: 0; left: 0; border-radius: 0 100% 0 var(--radius-card-desktop); opacity: 0.95; }
  .dentist-card-uiverse:hover::before, .dentist-card-uiverse:hover::after { width: 100%; height: 100%; border-radius: var(--radius-card-desktop); }
  .dentist-card-uiverse:hover::after { content: "Meet Dr. Vipul"; }

  .expert-care-section { position: relative; overflow: hidden; padding-top: var(--spacing-3xl); padding-bottom: var(--spacing-3xl); background-color: var(--bg-light); }
  .expert-care-grid { display: grid; grid-template-columns: 1fr; gap: var(--spacing-3xl); align-items: center; position: relative; z-index: 10; }
  @media (min-width: 1024px) { .expert-care-grid { grid-template-columns: 1fr 1fr; } }
  .serving-badge { display: inline-flex; align-items: center; gap: 8px; padding: 6px 16px; border-radius: var(--radius-pill); border: 1px solid var(--border); background: var(--white); box-shadow: var(--shadow-sm); margin-bottom: var(--spacing-xl); }
  .serving-dot-wrap { position: relative; display: flex; width: 10px; height: 10px; }
  .serving-dot-ping { position: absolute; width: 100%; height: 100%; border-radius: 50%; background: var(--primary); opacity: 0.7; animation: ping 1.5s cubic-bezier(0, 0, 0.2, 1) infinite; }
  .serving-dot { position: relative; width: 10px; height: 10px; border-radius: 50%; background: var(--primary); }
  @keyframes ping { 75%, 100% { transform: scale(2.5); opacity: 0; } }
  .expert-title-highlight { position: relative; display: inline-block; color: transparent; background-clip: text; -webkit-background-clip: text; background-image: linear-gradient(to right, var(--navy), var(--primary)); white-space: nowrap; }
  .expert-review-faces { display: flex; margin-left: 12px; }
  .expert-review-faces img { width: 40px; height: 40px; border-radius: 50%; border: 2px solid var(--white); margin-left: -12px; object-fit: cover; }
  
  .expert-collage { position: relative; width: 100%; aspect-ratio: 1; max-width: 600px; margin: 0 auto; }
  @media (min-width: 1024px) { .expert-collage { aspect-ratio: 4/3; } }
  .collage-img { position: absolute; object-fit: cover; border: 6px solid var(--white); box-shadow: var(--shadow-xl); border-radius: 32px; transition: transform 0.3s; }
  .collage-img:hover { filter: brightness(1.05); z-index: 40 !important; }
  .collage-img-1 { top: 0; right: 0; width: 55%; height: 55%; z-index: 10; animation: float-1 6s ease-in-out infinite; }
  .collage-img-2 { top: 12%; left: 2%; width: 40%; aspect-ratio: 1; z-index: 20; border-radius: 50%; animation: float-2 5.5s ease-in-out infinite; }
  .collage-img-3 { bottom: 5%; left: 5%; width: 45%; height: 45%; z-index: 30; animation: float-3 7s ease-in-out infinite; }
  .collage-img-4 { bottom: 0; right: 5%; width: 45%; height: 45%; z-index: 20; animation: float-4 6.5s ease-in-out infinite; }
  .collage-badge { position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); background: rgba(255,255,255,0.95); backdrop-filter: blur(8px); padding: 16px 20px; border-radius: 20px; box-shadow: var(--shadow-xl); z-index: 50; display: flex; align-items: center; gap: 16px; border: 1px solid var(--border); }
  @keyframes float-1 { 0%, 100% { transform: translateY(-8px) rotate(4deg); } 50% { transform: translateY(8px) rotate(6deg); } }
  @keyframes float-2 { 0%, 100% { transform: translateY(10px) rotate(-8deg); } 50% { transform: translateY(-10px) rotate(-10deg); } }
  @keyframes float-3 { 0%, 100% { transform: translateY(-8px) rotate(-4deg); } 50% { transform: translateY(8px) rotate(-2deg); } }
  @keyframes float-4 { 0%, 100% { transform: translateY(8px) rotate(6deg); } 50% { transform: translateY(-8px) rotate(8deg); } }

  .scrolling-testimonials { display: flex; gap: var(--spacing-md); height: 450px; overflow: hidden; mask-image: linear-gradient(to bottom, transparent, black 10%, black 90%, transparent); -webkit-mask-image: linear-gradient(to bottom, transparent, black 10%, black 90%, transparent); }
  @media (min-width: 768px) { .scrolling-testimonials { height: 500px; gap: var(--spacing-md-l); } }
  @media (min-width: 1024px) { .scrolling-testimonials { height: 600px; } }
  .scrolling-column { flex: 1; display: flex; flex-direction: column; gap: var(--spacing-md); }
  @media (min-width: 768px) { .scrolling-column { gap: var(--spacing-md-l); } }
  .scrolling-column:nth-child(2), .scrolling-column:nth-child(3) { display: none; }
  @media (min-width: 768px) { .scrolling-column:nth-child(2) { display: flex; } }
  @media (min-width: 1024px) { .scrolling-column:nth-child(3) { display: flex; } }
  .scrolling-track { display: flex; flex-direction: column; gap: var(--spacing-md-l); animation: scrollY 25s linear infinite; }
  .scrolling-track.reverse { animation: scrollY-reverse 30s linear infinite; }
  .scrolling-column:hover .scrolling-track { animation-play-state: paused; }
  @keyframes scrollY { 0% { transform: translateY(0); } 100% { transform: translateY(calc(-50% - 12px)); } }
  @keyframes scrollY-reverse { 0% { transform: translateY(calc(-50% - 12px)); } 100% { transform: translateY(0); } }
  .scroll-author-info h5 { margin-bottom: 2px; }

  .appointment-layout { background: var(--white); border: 1px solid var(--border); box-shadow: var(--shadow-card-desktop); border-radius: var(--radius-lg); padding: var(--spacing-xl) var(--spacing-md-l); }
  @media (min-width: 1024px) { .appointment-layout { padding: var(--spacing-3xl); } }
  .social-round { display: flex; gap: var(--spacing-md); }
  .social-round a { width: 48px; height: 48px; border-radius: 50%; background: var(--white); display: flex; align-items: center; justify-content: center; color: var(--navy); box-shadow: var(--shadow-sm); transition: var(--transition-smooth); }
  .social-round a:hover { background: var(--primary); color: var(--white); transform: translateY(-3px); }

  .calendar-time-wrapper { display: grid; grid-template-columns: 1fr; gap: var(--spacing-md-l); margin-top: var(--spacing-sm); }
  @media (min-width: 1024px) { .calendar-time-wrapper { grid-template-columns: 1.2fr 1fr; } }
  .calendar-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: var(--spacing-md); }
  .calendar-header h4 { font-size: 16px; margin: 0; color: var(--navy); }
  .calendar-btn { background: var(--bg-light); border: none; cursor: pointer; color: var(--navy); width: 32px; height: 32px; border-radius: 50%; display: flex; align-items: center; justify-content: center; transition: all 0.2s; }
  .calendar-btn:hover { background: var(--border); color: var(--primary); }
  .calendar-days-grid { display: grid; grid-template-columns: repeat(7, 1fr); gap: 4px; text-align: center; margin-bottom: var(--spacing-sm); }
  .calendar-days-grid span { font-size: 12px; font-weight: 700; color: var(--text-muted); }
  .calendar-dates-grid { display: grid; grid-template-columns: repeat(7, 1fr); gap: 4px; text-align: center; }
  .calendar-date { padding: var(--spacing-sm) 0; border-radius: var(--radius-md); cursor: pointer; font-size: 15px; font-weight: 600; color: var(--text-main); transition: all 0.2s; }
  .calendar-date:hover:not(.empty) { background: var(--bg-light); color: var(--primary); }
  .calendar-date.selected { background: var(--primary); color: var(--white); box-shadow: var(--shadow-sm); }
  .calendar-date.empty { cursor: default; }

  .time-slots { display: grid; grid-template-columns: 1fr 1fr; gap: var(--spacing-md-s); }
  .time-slot { padding: 14px; border: 1px solid var(--border); border-radius: var(--radius-card-mobile); background: var(--white); color: var(--text-main); font-weight: 600; cursor: pointer; transition: all 0.2s; font-family: inherit; font-size: 15px; text-align: center; box-shadow: var(--shadow-sm); }
  .time-slot:hover { border-color: var(--primary); color: var(--primary); }
  .time-slot.selected { background: var(--primary); color: var(--white); border-color: var(--primary); box-shadow: var(--shadow-sm); }

  .faq-container { max-width: 800px; margin: 0 auto; }
  .faq-item { border-bottom: 1px solid var(--border); }
  .faq-question { width: 100%; text-align: left; background: none; border: none; padding: var(--spacing-lg) 0; display: flex; justify-content: space-between; align-items: center; cursor: pointer; color: var(--navy); font-family: inherit; font-size: 20px; font-weight: 700; transition: color 0.3s ease; }
  .faq-question:hover { color: var(--primary); }
  .faq-icon { width: 36px; height: 36px; border-radius: 50%; flex-shrink: 0; background: var(--bg-light); display: flex; align-items: center; justify-content: center; color: var(--navy); transition: var(--transition-smooth); }
  .faq-item.active .faq-icon { background: var(--primary); color: var(--white); transform: rotate(45deg); }
  .faq-answer { max-height: 0; overflow: hidden; transition: max-height 0.5s cubic-bezier(0.25, 1, 0.5, 1); }
  .faq-answer-inner { padding-bottom: var(--spacing-lg); color: var(--text-muted); font-size: 16px; line-height: 1.6; }

  .reviews-masonry { column-count: 1; column-gap: var(--spacing-md); }
  @media (min-width: 768px) { .reviews-masonry { column-count: 2; column-gap: var(--spacing-md-l); } }
  @media (min-width: 1024px) { .reviews-masonry { column-count: 3; column-gap: var(--spacing-md-l); } }
  .review-card { break-inside: avoid; margin-bottom: var(--spacing-md); }
  @media (min-width: 768px) { .review-card { margin-bottom: var(--spacing-md-l); } }
  .review-card.bg-blue { background-color: var(--primary); color: white; border: none; }
  .review-card.bg-blue p, .review-card.bg-blue h4 { color: white; }
  .review-card.bg-blue .text-muted { color: rgba(255,255,255,0.8); }
  .review-card.bg-green { background-color: var(--green); color: white; border: none; }
  .review-card.bg-green p, .review-card.bg-green h4 { color: white; }
  .review-card.bg-green .text-muted { color: rgba(255,255,255,0.8); }
  .review-author { display: flex; align-items: center; gap: var(--spacing-md); margin-bottom: var(--spacing-md-l); }
  .review-author img { width: 56px; height: 56px; border-radius: 50%; object-fit: cover; }
  .review-author h4 { margin-bottom: 2px; }
  .review-top-bar { display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: var(--spacing-md-l); }
  .review-rating { display: flex; align-items: center; gap: var(--spacing-xs); font-weight: 700; font-size: 14px; }
  .review-brand { margin-top: var(--spacing-lg); font-family: 'Manrope', sans-serif; font-weight: 800; font-size: 24px; letter-spacing: -0.05em; }

  .tab-btn { padding: 10px 24px; border: none; background: transparent; border-radius: var(--radius-pill); font-family: inherit; font-weight: 600; font-size: 15px; color: var(--text-muted); cursor: pointer; transition: var(--transition-smooth); white-space: nowrap; }
  .tab-btn:hover { color: var(--navy); }
  .tab-btn.active { background: var(--white); color: var(--navy); box-shadow: var(--shadow-sm); }
  .service-detail-block { display: grid; grid-template-columns: 1fr; gap: var(--spacing-xl); align-items: center; margin-bottom: var(--spacing-4xl); padding-bottom: var(--spacing-4xl); border-bottom: 1px solid var(--border); }
  .service-detail-block:last-child { border-bottom: none; margin-bottom: 0; padding-bottom: 0; }
  @media (min-width: 1024px) { .service-detail-block { grid-template-columns: 1fr 1fr; gap: 80px; } .service-detail-block.reverse .service-block-content { order: 2; } .service-detail-block.reverse .service-block-image { order: 1; } }

  .cta-banner { background: var(--navy); border-radius: var(--radius-lg); padding: var(--spacing-3xl) var(--spacing-xl); text-align: center; color: var(--white); position: relative; overflow: hidden; }
  .cta-banner::before { content: ''; position: absolute; top: -50%; left: -50%; width: 200%; height: 200%; background: radial-gradient(circle, rgba(37,99,235,0.15) 0%, transparent 60%); pointer-events: none; }
  .cta-banner h2 { color: var(--white); margin-bottom: var(--spacing-md-l); }
  .cta-banner p { color: rgba(255,255,255,0.8); max-width: 600px; margin: 0 auto var(--spacing-xl); }

  .shadcn-footer { background: var(--white); padding: var(--spacing-4xl) 0 var(--spacing-xl); border-top: 1px solid var(--border); position: relative; z-index: var(--z-dropdown); }
  .footer-brand { margin-bottom: var(--spacing-lg); }
  .footer-brand .logo { font-family: 'Manrope', sans-serif; font-weight: 800; color: var(--navy); display: flex; align-items: center; gap: var(--spacing-xs); letter-spacing: -0.04em; }
  .footer-brand .logo sup { font-size: 13px; font-weight: 600; color: var(--text-muted); }
  .footer-brand .logo span { color: var(--primary); }
  .footer-brand .tagline { margin-top: var(--spacing-md); font-weight: 700; color: var(--navy); font-size: 16px; }
  .footer-col-new h3 { margin-bottom: var(--spacing-md); font-weight: 700; color: var(--navy); }
  .footer-col-new ul { display: flex; flex-direction: column; gap: var(--spacing-md); }
  .footer-col-new button { background: none; border:none; padding:0; font-family: inherit; cursor: pointer; color: var(--text-muted); font-weight: 500; font-size: 15px; transition: color 0.2s ease; }
  .footer-col-new button:hover { color: var(--primary); }
  .footer-bottom-new { margin-top: var(--spacing-3xl); padding-top: var(--spacing-lg); border-top: 1px solid var(--border); display: flex; flex-direction: column; justify-content: space-between; gap: var(--spacing-md); font-size: 14px; font-weight: 500; color: var(--text-muted); }
  @media (min-width: 768px) { .footer-bottom-new { flex-direction: row; align-items: center; } }
  .bottom-links { display: flex; gap: var(--spacing-md); }
  .bottom-links a:hover { color: var(--primary); text-decoration: underline; }

  .reveal, .reveal-left, .reveal-right { opacity: 0; transition: all 1s cubic-bezier(0.16, 1, 0.3, 1); }
  .reveal { transform: translateY(40px) scale(0.96); }
  .reveal.active { opacity: 1; transform: translateY(0) scale(1); }
  .reveal-left { transform: translateX(-40px) scale(0.96); }
  .reveal-left.active { opacity: 1; transform: translateX(0) scale(1); }
  .reveal-right { transform: translateX(40px) scale(0.96); }
  .reveal-right.active { opacity: 1; transform: translateX(0) scale(1); }
  .delay-1 { transition-delay: 0.1s; } .delay-2 { transition-delay: 0.2s; } .delay-3 { transition-delay: 0.3s; }
`;

export default function CrispDentApp() {
  const [loaded, setLoaded] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeRoute, setActiveRoute] = useState('home');
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(100);

  // Intersection Observer to trigger '.reveal' animations
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1, rootMargin: "0px 0px -50px 0px" });

    const elements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, [activeRoute, loaded]);

  // Loader & Scroll Listeners
  useEffect(() => {
    // Fake app loader
    const timer = setTimeout(() => {
      setLoaded(true);
      document.body.classList.add('loaded');
    }, 1500);

    const handleScroll = () => {
      const scrollY = window.scrollY;
      setScrolled(scrollY > 50);

      // Circular progress bar logic
      const height = document.documentElement.scrollHeight - window.innerHeight;
      const progress = 100 - (scrollY * 100 / height);
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Soft Route Navigation Method
  const navigateTo = (route) => {
    if (route === activeRoute || isTransitioning) return;
    setMobileMenuOpen(false);
    setIsTransitioning(true);
    document.body.classList.add('is-transitioning');
    
    setTimeout(() => {
      setActiveRoute(route);
      window.scrollTo({ top: 0, behavior: 'instant' });
      document.body.classList.remove('is-transitioning');
      
      setTimeout(() => {
        setIsTransitioning(false);
      }, 400);
    }, 400);
  };

  // Reusable Hero Word Animator Component
  const AnimatedHeroTitle = ({ text }) => {
    return (
      <h1 className="hero-title text-display">
        {text.split(' ').map((word, i) => (
          <span 
            key={i} 
            style={{ 
              display: 'inline-block', 
              opacity: loaded ? 1 : 0, 
              transform: loaded ? 'translateY(0)' : 'translateY(30px)', 
              transition: `all 0.6s cubic-bezier(0.2, 0.8, 0.2, 1) ${i * 0.1}s` 
            }}
          >
            {word}&nbsp;
          </span>
        ))}
      </h1>
    );
  };

  // Custom Calendar State for Appointment Booking
  const [currentDate, setCurrentDate] = useState(new Date(2026, 4, 1)); // Default May 2026
  const [selectedDate, setSelectedDate] = useState(new Date(2026, 4, 15));
  const [selectedTimeSlot, setSelectedTimeSlot] = useState('09:00 AM');

  const renderCalendarDays = () => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const firstDayIndex = new Date(year, month, 1).getDay();
    const lastDay = new Date(year, month + 1, 0).getDate();
    
    const days = [];
    for (let i = 0; i < firstDayIndex; i++) {
      days.push(<div key={`empty-${i}`} className="calendar-date empty"></div>);
    }
    for (let i = 1; i <= lastDay; i++) {
      const isSelected = selectedDate.getDate() === i && selectedDate.getMonth() === month && selectedDate.getFullYear() === year;
      days.push(
        <div 
          key={`day-${i}`} 
          className={`calendar-date ${isSelected ? 'selected' : ''}`}
          onClick={() => setSelectedDate(new Date(year, month, i))}
        >
          {i}
        </div>
      );
    }
    return days;
  };

  const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  const FAQItem = ({ question, answer, isOpen, onClick }) => (
    <div className={`faq-item ${isOpen ? 'active' : ''}`}>
      <button className="faq-question" onClick={onClick}>
        {question}
        <span className="faq-icon"><Plus size={24} /></span>
      </button>
      <div className="faq-answer" style={{ maxHeight: isOpen ? '500px' : '0' }}>
        <div className="faq-answer-inner">{answer}</div>
      </div>
    </div>
  );
  const [activeFaq, setActiveFaq] = useState(0);

  const [activeServiceFilter, setActiveServiceFilter] = useState('all');

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: globalCss }} />
      
      {/* Loader */}
      {!loaded && (
        <div id="loader" style={{ transform: loaded ? 'translateY(-100%)' : 'none', opacity: loaded ? 0 : 1 }}>
          <div className="dots-container">
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
          </div>
        </div>
      )}

      {/* Progress Scroll to Top */}
      <div 
        className={`progress-wrap ${scrollProgress < 90 ? 'active-progress' : ''}`} 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <svg className="progress-circle svg-content" width="100%" height="100%" viewBox="-1 -1 102 102">
          <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" 
                style={{ strokeDasharray: '307.919, 307.919', strokeDashoffset: `${(scrollProgress / 100) * 307.919}` }} />
        </svg>
      </div>

      {/* Transition Overlay */}
      <div className="page-transition-overlay"></div>

      {}
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="nav-container">
          <button onClick={() => navigateTo('home')} className="logo" style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
            Crisp<span>Dent</span> <sup>®</sup>
          </button>
          
          <ul className={`nav-links ${mobileMenuOpen ? 'active' : ''}`} style={mobileMenuOpen ? { display: 'flex', flexDirection: 'column', position: 'absolute', top: '70px', left: 0, right: 0, background: 'white', padding: '20px', borderRadius: '16px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' } : {}}>
            <li><button onClick={() => navigateTo('home')} className={activeRoute === 'home' ? 'active' : ''}>Home</button></li>
            <li><button onClick={() => navigateTo('about')} className={activeRoute === 'about' ? 'active' : ''}>Blogs</button></li>
            <li><button onClick={() => navigateTo('services')} className={activeRoute === 'services' ? 'active' : ''}>Services</button></li>
            <li><button onClick={() => navigateTo('about-us')} className={activeRoute === 'about-us' ? 'active' : ''}>About Us</button></li>
          </ul>
          
          <div className="nav-actions">
            <div className="cart-btn">
              <ShoppingBag size={20} />
              <div className="cart-badge">0</div>
            </div>
            <button onClick={() => navigateTo('appointments')} className="btn btn-primary btn-nav-animated">
              Book Appointment <ArrowRight size={18} style={{ marginLeft: 8 }} />
            </button>
            <button className="mobile-toggle" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              <Menu size={24} />
            </button>
          </div>
        </div>
      </nav>

      <main id="main-content">
        {/* ==========================================
            PAGE: HOME
            ========================================== */}
        {}
        <div className={`page-section ${activeRoute === 'home' ? 'active' : ''}`}>
          <section className="hero">
            <div className="container hero-content-wrapper">
              <div className="hero-badge-top reveal">
                <div className="avatar-group">
                  <img src="https://picsum.photos/seed/user1/60/60" alt="User" />
                  <img src="https://picsum.photos/seed/user2/60/60" alt="User" />
                  <img src="https://picsum.photos/seed/user3/60/60" alt="User" />
                  <img src="https://picsum.photos/seed/user4/60/60" alt="User" />
                </div>
                Trusted by 115k+ people
              </div>
              
              <AnimatedHeroTitle text="Your Smile. Transformed in One Visit." />
              
              <p className="hero-desc text-large reveal delay-1" style={{ marginBottom: 'var(--spacing-xl)' }}>
                Advanced dental care for the whole family — painless, precise, and built around your schedule.
              </p>
              
              <div className="hero-buttons reveal delay-2">
                <button onClick={() => navigateTo('appointments')} className="btn btn-white">
                  Book Your Free Consultation <ArrowRight size={20} />
                </button>
                <button onClick={() => navigateTo('gallery')} className="btn btn-glass">
                  See Our Work <ArrowDown size={20} />
                </button>
              </div>
              
              <div className="hero-trust-line reveal delay-3" style={{ marginTop: 'var(--spacing-md-l)', color: 'var(--white)', fontWeight: 600, display: 'flex', alignItems: 'center', gap: 'var(--spacing-md)', flexWrap: 'wrap' }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-xs)' }}><Star fill="#F59E0B" color="#F59E0B" size={20} /> 4.9 Rating</span>
                <span style={{ opacity: 0.5 }}>|</span> 
                <span>1,200+ Patients Treated</span>
                <span style={{ opacity: 0.5 }}>|</span> 
                <span>0% EMI Available</span>
              </div>

              <div className="hero-right-cards reveal delay-3">
                <div className="card glass-card-square">
                  <h5>Trusted Rate</h5>
                  <h2>98%</h2>
                  <p>Our clients love us and are consistently satisfied with our care.</p>
                </div>
                <div className="glass-card-tags">
                  <div className="tag-pill">Empowering <Plus size={18} /></div>
                  <div className="tag-pill active">Individualizing</div>
                  <div className="tag-pill">Revolutionizing <Plus size={18} /></div>
                </div>
              </div>
            </div>
          </section>

          <div className="ticker-section">
            <h4 className="ticker-title">Powered by World-Class Dental Technology</h4>
            <div className="ticker-wrap">
              <div className="ticker-items">
                <div className="ticker-logo">InvisaClear <sup>®</sup></div>
                <div className="ticker-logo"><Box size={32} color="var(--primary)" /> SmileTech</div>
                <div className="ticker-logo">LumiWhite</div>
                <div className="ticker-logo">CarePlus.</div>
                <div className="ticker-logo"><Triangle size={32} color="var(--navy)" fill="var(--navy)" /> AeroDent</div>
                <div className="ticker-logo">DentaCore <sup>®</sup></div>
              </div>
              <div className="ticker-items">
                <div className="ticker-logo">InvisaClear <sup>®</sup></div>
                <div className="ticker-logo"><Box size={32} color="var(--primary)" /> SmileTech</div>
                <div className="ticker-logo">LumiWhite</div>
                <div className="ticker-logo">CarePlus.</div>
                <div className="ticker-logo"><Triangle size={32} color="var(--navy)" fill="var(--navy)" /> AeroDent</div>
                <div className="ticker-logo">DentaCore <sup>®</sup></div>
              </div>
            </div>
          </div>

          <section className="section bg-light" style={{ overflow: 'hidden', position: 'relative', paddingTop: 'var(--spacing-3xl)', paddingBottom: 'var(--spacing-3xl)' }}>
            <div className="bg-gradient-glow"></div>
            <div className="container relative" style={{ zIndex: 1 }}>
              <div className="text-center reveal" style={{ maxWidth: 600, margin: '0 auto var(--spacing-2xl)' }}>
                <span className="badge-pill">Services</span>
                <h2 className="text-h2" style={{ marginBottom: 'var(--spacing-md)' }}>Your Personalized<br />Dental Care</h2>
                <p className="text-large" style={{ color: 'var(--text-muted)' }}>Comprehensive dental care tailored to keep your smile healthy and bright.</p>
              </div>
              
              <div className="grid grid-cols-3 reveal delay-1">
                <div className="service-card-new">
                  <div className="service-icon-new"><Stethoscope size={28} /></div>
                  <h3 className="text-h4" style={{ marginBottom: 'var(--spacing-sm)' }}>General Dentistry</h3>
                  <p style={{ color: 'var(--text-muted)' }}>Regular check-ups and professional cleanings to maintain your oral health and prevent future issues.</p>
                </div>
                <div className="service-card-new">
                  <div className="service-icon-new"><ShieldCheck size={28} /></div>
                  <h3 className="text-h4" style={{ marginBottom: 'var(--spacing-sm)' }}>Dental Implants</h3>
                  <p style={{ color: 'var(--text-muted)' }}>Replace missing teeth with durable, natural-looking implants for a complete smile.</p>
                </div>
                <div className="service-card-new">
                  <div className="service-icon-new"><Baby size={28} /></div>
                  <h3 className="text-h4" style={{ marginBottom: 'var(--spacing-sm)' }}>Pediatric Dentistry</h3>
                  <p style={{ color: 'var(--text-muted)' }}>Friendly, gentle dental care to ensure your child's visits are comfortable, enjoyable, and stress-free.</p>
                </div>
                <div className="service-card-new">
                  <div className="service-icon-new"><LayoutGrid size={28} /></div>
                  <h3 className="text-h4" style={{ marginBottom: 'var(--spacing-sm)' }}>Orthodontics</h3>
                  <p style={{ color: 'var(--text-muted)' }}>Straighten your teeth and align your bite. Services include traditional braces, clear aligners.</p>
                </div>
                <div className="service-card-new">
                  <div className="service-icon-new"><Sparkles size={28} /></div>
                  <h3 className="text-h4" style={{ marginBottom: 'var(--spacing-sm)' }}>Cosmetic Dentistry</h3>
                  <p style={{ color: 'var(--text-muted)' }}>Enhance the appearance of your smile with treatments tailored to boost your confidence impression.</p>
                </div>
                <div className="service-card-new">
                  <div className="service-icon-new"><HeartPulse size={28} /></div>
                  <h3 className="text-h4" style={{ marginBottom: 'var(--spacing-sm)' }}>Emergency Care</h3>
                  <p style={{ color: 'var(--text-muted)' }}>Immediate relief for unexpected dental problems like toothaches, broken teeth, or injuries.</p>
                </div>
              </div>
            </div>
          </section>

          {}
          <section className="section" style={{ overflow: 'hidden', paddingTop: 'var(--spacing-3xl)', paddingBottom: 'var(--spacing-3xl)' }}>
            <div className="container speciality-split">
              <div className="speciality-img-wrapper reveal">
                <div className="speciality-img-offset"></div>
                <img src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=1000&q=80" alt="Confident patient with a bright smile" className="speciality-img" />
                
                <div className="trust-badge-float">
                  <div style={{ width: 56, height: 56, background: 'var(--primary)', borderRadius: 16, display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--white)', boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.1)' }}>
                    <Sparkles size={28} />
                  </div>
                  <div>
                    <p style={{ fontSize: 24, fontWeight: 800, color: 'var(--navy)', lineHeight: 1 }}>100%</p>
                    <p style={{ fontSize: 14, fontWeight: 600, color: 'var(--text-muted)', marginTop: 4 }}>Smile Satisfaction</p>
                  </div>
                </div>
              </div>
              
              <div className="reveal delay-1">
                <span className="badge-pill" style={{ background: '#EFF6FF', borderColor: '#DBEAFE' }}>Speciality</span>
                <h2 className="text-h2" style={{ marginBottom: 'var(--spacing-lg)' }}>Our Speciality:<br />Smile Transformations</h2>
                
                <ul className="speciality-list">
                  <li className="speciality-list-item">
                    <div className="speciality-list-icon"><CheckCircle size={16} /></div>
                    <span className="text-large" style={{ color: 'var(--text-main)', fontWeight: 500 }}>Tailored treatments to enhance your unique smile.</span>
                  </li>
                  <li className="speciality-list-item">
                    <div className="speciality-list-icon"><CheckCircle size={16} /></div>
                    <span className="text-large" style={{ color: 'var(--text-main)', fontWeight: 500 }}>State-of-the-art tools for precise and effective results.</span>
                  </li>
                  <li className="speciality-list-item">
                    <div className="speciality-list-icon"><CheckCircle size={16} /></div>
                    <span className="text-large" style={{ color: 'var(--text-main)', fontWeight: 500 }}>Combining cosmetic, orthodontic, and restorative procedures.</span>
                  </li>
                </ul>
                
                <button onClick={() => navigateTo('appointments')} className="btn btn-primary" style={{ boxShadow: '0 8px 20px -6px rgba(37,99,235,0.5)' }}>
                  Know More <ArrowRight size={20} />
                </button>
              </div>
            </div>
          </section>

          {}
          <section className="expert-care-section">
            <div className="bg-gradient-glow" style={{ width: '60%', height: '60%', top: '20%', left: '60%' }}></div>
            <div className="container expert-care-grid">
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', maxWidth: 600 }}>
                <div className="serving-badge reveal">
                  <span className="serving-dot-wrap">
                    <span className="serving-dot-ping"></span>
                    <span className="serving-dot"></span>
                  </span>
                  <span style={{ fontSize: 14, fontWeight: 700, color: 'var(--navy)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Serving since 2010</span>
                </div>
                
                <h2 className="text-h2 reveal delay-1" style={{ marginBottom: 'var(--spacing-md-l)' }}>
                  Expert dental care for <span className="expert-title-highlight">every stage</span><br />of life
                </h2>
                
                <p className="text-large reveal delay-2" style={{ color: 'var(--text-muted)', marginBottom: 'var(--spacing-xl)', lineHeight: 1.7 }}>
                  We offer personalized, high-quality care in a welcoming environment. Whether you're in for a check-up or a smile makeover, your comfort and satisfaction are top priority.
                </p>
                
                <div className="hero-buttons reveal delay-3" style={{ width: '100%', flexWrap: 'wrap', marginBottom: 'var(--spacing-2xl)' }}>
                  <button onClick={() => navigateTo('services')} className="btn btn-primary btn-animated-fill" style={{ padding: '0 32px' }}>
                    <span>See what we offer</span> <ArrowRight size={20} />
                  </button>
                  <button onClick={() => navigateTo('appointments')} className="btn btn-outline" style={{ padding: '0 32px' }}>Contact us</button>
                </div>
              </div>
              
              <div className="expert-collage reveal delay-2">
                <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '70%', height: '70%', background: 'radial-gradient(circle, rgba(37,99,235,0.15) 0%, transparent 70%)', filter: 'blur(30px)', borderRadius: '50%', zIndex: 0 }}></div>
                <img src="https://framerusercontent.com/images/ZSWOCuXfIBUW1dA0PJ4knsL6XyA.png" className="collage-img collage-img-1" alt="Adult female smiling" />
                <img src="https://framerusercontent.com/images/T8kux1BplKrqMaFqTpYuLSUuw.png" className="collage-img collage-img-2" alt="Child smiling" />
                <img src="https://framerusercontent.com/images/bB9GVHLY4XsNM7W4jtt46ZolGk.png" className="collage-img collage-img-3" alt="Teenager smiling" />
                <img src="https://framerusercontent.com/images/bJLDhsAVtZl5MFyNaYx2Cl8vBE.png" className="collage-img collage-img-4" alt="Adult male" />
                
                <div className="collage-badge">
                  <div style={{ width: 48, height: 48, borderRadius: '50%', background: '#EFF6FF', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary)' }}>
                    <Smile size={24} />
                  </div>
                  <div>
                    <p style={{ fontSize: 14, fontWeight: 800, color: 'var(--navy)', whiteSpace: 'nowrap', marginBottom: 2 }}>Personalized Care</p>
                    <p style={{ fontSize: 12, color: 'var(--text-muted)', whiteSpace: 'nowrap' }}>For your unique smile</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {}
          <section className="section">
            <div className="container">
              <div className="grid grid-cols-appoint appointment-layout reveal delay-1">
                <div className="appointment-text">
                  <h1 className="text-h1">Schedule your<br />visit with us</h1>
                  <p className="text-large">Select your preferred date and time. Our team will get back to you shortly to confirm your schedule.</p>
                  
                  <div className="social-round" style={{ marginTop: 'var(--spacing-xl)' }}>
                    <a href="#" style={{ background: 'var(--bg-light)' }}><Facebook size={24} /></a>
                    <a href="#" style={{ background: 'var(--bg-light)' }}><Linkedin size={24} /></a>
                    <a href="#" style={{ background: 'var(--bg-light)' }}><Instagram size={24} /></a>
                  </div>
                </div>
                
                <div className="appointment-form">
                  <form onSubmit={(e) => e.preventDefault()} noValidate>
                    <div className="grid grid-cols-2">
                      <div className="form-group">
                        <input type="text" className="form-control" placeholder=" " required />
                        <label className="form-label">First Name</label>
                      </div>
                      <div className="form-group">
                        <input type="text" className="form-control" placeholder=" " required />
                        <label className="form-label">Last Name</label>
                      </div>
                      <div className="form-group">
                        <input type="email" className="form-control" placeholder=" " required />
                        <label className="form-label">Email Address</label>
                      </div>
                      <div className="form-group">
                        <input type="tel" className="form-control" placeholder=" " required />
                        <label className="form-label">Phone Number</label>
                      </div>
                      <div className="form-group full-width">
                        <div style={{ position: 'relative' }}>
                          <select className="form-control" style={{ appearance: 'none' }} required defaultValue="">
                            <option value="" disabled hidden></option>
                            <option value="cleaning">Teeth Cleaning</option>
                            <option value="whitening">Teeth Whitening</option>
                            <option value="implants">Dental Implants</option>
                            <option value="orthodontics">Orthodontics</option>
                          </select>
                          <label className="form-label">Service Type</label>
                          <ChevronDown size={20} style={{ position: 'absolute', right: 'var(--spacing-md)', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)', pointerEvents: 'none' }} />
                        </div>
                      </div>

                      {/* Custom Calendar Component */}
                      <div className="form-group full-width">
                        <span className="form-label" style={{position:'static', display:'block', marginBottom:'8px'}}>Date & Time</span>
                        <div className="calendar-time-wrapper">
                          <div className="card custom-calendar">
                            <div className="calendar-header">
                              <button type="button" className="calendar-btn" onClick={() => setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1))}><ChevronLeft size={20} /></button>
                              <h4>{monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}</h4>
                              <button type="button" className="calendar-btn" onClick={() => setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1))}><ChevronRight size={20} /></button>
                            </div>
                            <div className="calendar-days-grid">
                              <span>Su</span><span>Mo</span><span>Tu</span><span>We</span><span>Th</span><span>Fr</span><span>Sa</span>
                            </div>
                            <div className="calendar-dates-grid">
                              {renderCalendarDays()}
                            </div>
                          </div>

                          <div className="time-slots">
                            {['09:00 AM', '10:00 AM', '11:30 AM', '01:00 PM', '02:30 PM', '04:00 PM'].map((slot) => (
                              <button 
                                key={slot} 
                                type="button" 
                                className={`time-slot ${selectedTimeSlot === slot ? 'selected' : ''}`}
                                onClick={() => setSelectedTimeSlot(slot)}
                              >
                                {slot}
                              </button>
                            ))}
                          </div>
                        </div>
                      </div>

                      <div className="form-group full-width" style={{ marginTop: 'var(--spacing-md)' }}>
                        <button type="submit" className="btn btn-primary btn-animated-fill" style={{ width: '100%', justifyContent: 'center' }}>
                          <span>Confirm Appointment</span> <ArrowRight size={20} />
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </section>

          <section className="section bg-light">
            <div className="container">
              <div className="section-header text-center reveal">
                <h2 className="section-title text-h2">Frequently Asked Questions</h2>
                <p className="section-subtitle text-large">Find quick answers to common questions about our services and care.</p>
              </div>
              
              <div className="faq-container reveal delay-1">
                <FAQItem 
                  question="What should I expect during my first visit?" 
                  answer="Your first visit will include a comprehensive oral examination, digital X-rays if necessary, and a consultation with our experts to discuss your dental health goals and create a personalized treatment plan tailored specifically for you."
                  isOpen={activeFaq === 0} onClick={() => setActiveFaq(activeFaq === 0 ? null : 0)} 
                />
                <FAQItem 
                  question="Do you offer payment plans or accept insurance?" 
                  answer="Yes! We accept most major dental insurance plans. For out-of-pocket expenses or cosmetic procedures not covered by insurance, we offer flexible, interest-free financing options to ensure your care is affordable."
                  isOpen={activeFaq === 1} onClick={() => setActiveFaq(activeFaq === 1 ? null : 1)} 
                />
                <FAQItem 
                  question="Are teeth whitening treatments safe?" 
                  answer="Absolutely. Professional teeth whitening at CrispDent is closely monitored by our dental experts. We use specialized, medical-grade formulas and protective barriers to ensure zero damage to your enamel while minimizing tooth sensitivity."
                  isOpen={activeFaq === 2} onClick={() => setActiveFaq(activeFaq === 2 ? null : 2)} 
                />
              </div>
            </div>
          </section>
        </div>

        {/* ==========================================
            PAGE: SERVICES
            ========================================== */}
        {}
        <div className={`page-section ${activeRoute === 'services' ? 'active' : ''}`}>
          <header className="page-header">
            <div className="page-header-glow"></div>
            <div className="container reveal">
              <span className="badge-pill" style={{ background: 'var(--white)', borderColor: 'var(--border)' }}>Treatments</span>
              <h1 className="text-h1">Dental Solutions for Every Stage of Life</h1>
              <p className="text-large">From routine cleanings to complete smile makeovers — we've got it all, handled by specialists.</p>
            </div>
          </header>

          <section className="section">
            <div className="container">
              <div className="reveal text-center" style={{ marginBottom: 'var(--spacing-3xl)' }}>
                <div style={{ background: 'var(--border)', padding: 4, borderRadius: 'var(--radius-pill)', display: 'inline-flex', gap: 4, overflowX: 'auto', maxWidth: '100%', boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.03)' }}>
                  {['all', 'cosmetic', 'restorative', 'preventive', 'kids'].map(filter => (
                    <button key={filter} className={`tab-btn ${activeServiceFilter === filter ? 'active' : ''}`} onClick={() => setActiveServiceFilter(filter)}>
                      {filter === 'all' ? 'All Services' : filter.charAt(0).toUpperCase() + filter.slice(1)}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                {/* Condition blocks based on filters */}
                {['all', 'cosmetic'].includes(activeServiceFilter) && (
                  <div className="service-detail-block reveal delay-1">
                    <div className="service-block-content">
                      <span className="badge-pill" style={{ marginBottom: 'var(--spacing-sm)' }}>Cosmetic</span>
                      <h2 className="text-h2" style={{ marginBottom: 'var(--spacing-md)', lineHeight: 1.1 }}>Hollywood-Bright Teeth in 60 Minutes</h2>
                      <p className="text-large" style={{ color: 'var(--text-muted)', marginBottom: 'var(--spacing-md-l)' }}>Stained or yellowed teeth hold back your confidence more than you realize. Our in-clinic whitening treatment uses professional-grade bleaching gel activated by LED light — giving you 6–8 shades brighter teeth in a single session. Safe, fast, and long-lasting.</p>
                      
                      <p style={{ fontSize: 22, fontWeight: 800, color: 'var(--navy)', marginBottom: 'var(--spacing-md-l)' }}>Starting From: ₹4,999</p>
                      <button onClick={() => navigateTo('appointments')} className="btn btn-primary btn-animated-fill">
                        <span>Book Whitening Session</span> <ArrowRight size={20} />
                      </button>
                    </div>
                    <div className="service-block-image">
                      <img src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=800&q=80" alt="Teeth Whitening" style={{ borderRadius: 'var(--radius-lg)', width: '100%', objectFit: 'cover', boxShadow: 'var(--shadow-lg)', aspectRatio: '4/3' }} />
                    </div>
                  </div>
                )}

                {['all', 'restorative'].includes(activeServiceFilter) && (
                  <div className="service-detail-block reverse reveal delay-1">
                    <div className="service-block-content">
                      <span className="badge-pill" style={{ marginBottom: 'var(--spacing-sm)' }}>Restorative</span>
                      <h2 className="text-h2" style={{ marginBottom: 'var(--spacing-md)', lineHeight: 1.1 }}>Permanent Teeth That Look, Feel, and Work Like Real Ones</h2>
                      <p className="text-large" style={{ color: 'var(--text-muted)', marginBottom: 'var(--spacing-md-l)' }}>Missing teeth affect more than your appearance — they impact how you eat, speak, and age. Dental implants are the gold standard replacement.</p>
                      <p style={{ fontSize: 22, fontWeight: 800, color: 'var(--navy)', marginBottom: 'var(--spacing-md-l)' }}>Starting From: ₹25,000 per implant</p>
                      <button onClick={() => navigateTo('appointments')} className="btn btn-primary btn-animated-fill">
                        <span>Get Implant Consultation</span> <ArrowRight size={20} />
                      </button>
                    </div>
                    <div className="service-block-image">
                      <img src="https://images.unsplash.com/photo-1598256989800-fea5f6c8d0ea?auto=format&fit=crop&w=800&q=80" alt="Dental Implants" style={{ borderRadius: 'var(--radius-lg)', width: '100%', objectFit: 'cover', boxShadow: 'var(--shadow-lg)', aspectRatio: '4/3' }} />
                    </div>
                  </div>
                )}
              </div>
            </div>
          </section>
        </div>

        {/* ==========================================
            PAGE: ABOUT & BLOGS
            ========================================== */}
        {}
        <div className={`page-section ${activeRoute === 'about' ? 'active' : ''}`}>
          <header className="page-header">
            <div className="page-header-glow"></div>
            <div className="container reveal">
              <span className="badge-pill" style={{ background: 'var(--white)', borderColor: 'var(--border)' }}>Our Journal</span>
              <h1 className="text-h1">Our Story & Insights</h1>
              <p className="text-large">Get to know the experts behind CrispDent and stay updated with our latest dental tips.</p>
            </div>
          </header>

          <section className="section bg-light">
            <div className="container">
              <div className="section-header text-center reveal">
                <h2 className="section-title text-h2">Meet Our Experts</h2>
                <p className="section-subtitle text-large">A team of highly qualified specialists dedicated to your oral health.</p>
              </div>
              <div className="grid grid-cols-3 reveal delay-1">
                <div className="card">
                  <img src="https://picsum.photos/seed/doctor11/400/533" alt="Dr. Sarah Jenkins" className="img-doctor" />
                  <h3 className="text-h3" style={{ marginTop: 'var(--spacing-md)' }}>Dr. Sarah Jenkins</h3>
                  <p style={{ color: 'var(--primary)', fontWeight: 600, fontSize: 16 }}>Lead Orthodontist</p>
                </div>
                <div className="card">
                  <img src="https://picsum.photos/seed/doctor22/400/533" alt="Dr. Michael Reynolds" className="img-doctor" />
                  <h3 className="text-h3" style={{ marginTop: 'var(--spacing-md)' }}>Dr. Michael Reynolds</h3>
                  <p style={{ color: 'var(--primary)', fontWeight: 600, fontSize: 16 }}>Endodontist</p>
                </div>
                <div className="card">
                  <img src="https://picsum.photos/seed/doctor33/400/533" alt="Dr. Emily Chen" className="img-doctor" />
                  <h3 className="text-h3" style={{ marginTop: 'var(--spacing-md)' }}>Dr. Emily Chen</h3>
                  <p style={{ color: 'var(--primary)', fontWeight: 600, fontSize: 16 }}>Pediatric Dentist</p>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* ==========================================
            PAGE: ABOUT US 
            ========================================== */}
        <div className={`page-section ${activeRoute === 'about-us' ? 'active' : ''}`}>
          <header className="page-header">
            <div className="page-header-glow"></div>
            <div className="container reveal">
              <span className="badge-pill" style={{ background: 'var(--white)', borderColor: 'var(--border)' }}>Company Profile</span>
              <h1 className="text-h1">Our Story</h1>
              <p className="text-large">A legacy of smiles, built on trust, innovation, and compassion.</p>
            </div>
          </header>
          
          <section className="section bg-light">
            <div className="container">
              <div className="section-header text-center reveal">
                <h2 className="section-title text-h2">Our Core Values</h2>
                <p className="section-subtitle text-large">The principles that guide every procedure, every consultation, and every smile.</p>
              </div>
              <div className="grid grid-cols-3 reveal delay-1">
                <div className="service-card-new">
                  <div className="service-icon-new"><HeartHandshake size={28} /></div>
                  <h3 className="text-h4" style={{ marginBottom: 'var(--spacing-sm)' }}>Radical Empathy</h3>
                  <p style={{ color: 'var(--text-muted)' }}>We listen before we treat. Understanding your anxieties, goals, and financial constraints is just as important as the clinical diagnosis.</p>
                </div>
                <div className="service-card-new">
                  <div className="service-icon-new"><Microscope size={28} /></div>
                  <h3 className="text-h4" style={{ marginBottom: 'var(--spacing-sm)' }}>Clinical Excellence</h3>
                  <p style={{ color: 'var(--text-muted)' }}>We heavily invest in continuous education and state-of-the-art technology to ensure you receive the safest treatments available globally.</p>
                </div>
                <div className="service-card-new">
                  <div className="service-icon-new"><ShieldCheck size={28} /></div>
                  <h3 className="text-h4" style={{ marginBottom: 'var(--spacing-sm)' }}>Absolute Integrity</h3>
                  <p style={{ color: 'var(--text-muted)' }}>No hidden fees, no unnecessary procedures, and no rushing. We recommend what you actually need.</p>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* ==========================================
            PAGE: APPOINTMENTS
            ========================================== */}
        <div className={`page-section ${activeRoute === 'appointments' ? 'active' : ''}`}>
          <section className="section" style={{ paddingTop: 'var(--spacing-4xl)' }}>
            <div className="container">
              <div className="grid grid-cols-appoint appointment-layout reveal delay-1">
                <div className="appointment-text">
                  <h1 className="text-h1">Book your<br />appointment<br />today!</h1>
                  <p className="text-large">Our team is here to help you. We care about your health and we'll get back to you within 24 hours.</p>
                </div>
                
                <div className="appointment-form">
                  <form onSubmit={(e) => e.preventDefault()} noValidate>
                    <div className="grid grid-cols-2">
                      <div className="form-group">
                        <input type="text" className="form-control" placeholder=" " required />
                        <label className="form-label">First Name</label>
                      </div>
                      <div className="form-group">
                        <input type="text" className="form-control" placeholder=" " required />
                        <label className="form-label">Last Name</label>
                      </div>
                      <div className="form-group full-width" style={{ marginTop: 'var(--spacing-md)' }}>
                        <button type="submit" className="btn btn-primary btn-animated-fill" style={{ width: '100%', justifyContent: 'center' }}>
                          <span>Submit Request</span> <ArrowRight size={20} />
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* ==========================================
            PAGE: GALLERY
            ========================================== */}
        <div className={`page-section ${activeRoute === 'gallery' ? 'active' : ''}`}>
          <header className="page-header">
            <div className="page-header-glow"></div>
            <div className="container reveal">
              <span className="badge-pill" style={{ background: 'var(--white)', borderColor: 'var(--border)' }}>Portfolio</span>
              <h1 className="text-h1">Smile Gallery</h1>
            </div>
          </header>
          <section className="section bg-light">
            <div className="container">
              <div className="grid grid-cols-3 reveal delay-1">
                {/* Sample before/after components */}
                <div className="card">
                  <div style={{ display: 'flex', gap: 'var(--spacing-sm)', marginBottom: 'var(--spacing-md)' }}>
                    <img src="https://picsum.photos/seed/before1/300/300" alt="Before" style={{ width: '50%', height: 'auto', borderRadius: 'var(--radius-md)' }} />
                    <img src="https://picsum.photos/seed/after1/300/300" alt="After" style={{ width: '50%', height: 'auto', borderRadius: 'var(--radius-md)' }} />
                  </div>
                  <h3 className="text-h3">Laser Teeth Whitening</h3>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>

      {}
      <footer className="shadcn-footer">
        <div className="container">
          <div className="grid grid-cols-4 footer-grid-new reveal delay-1">
            <div className="footer-brand">
              <button onClick={() => navigateTo('home')} className="logo" style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}>
                <Activity color="var(--primary)" size={32} /> Crisp<span>Dent</span> <sup>®</sup>
              </button>
              <p className="tagline">Premium dental care made easy.</p>
            </div>
            
            <div className="footer-col-new">
              <h3 className="text-h4">Services</h3>
              <ul>
                <li><button onClick={() => navigateTo('services')}>Teeth Whitening</button></li>
                <li><button onClick={() => navigateTo('services')}>Dental Implants</button></li>
                <li><button onClick={() => navigateTo('services')}>Orthodontics</button></li>
              </ul>
            </div>
            
            <div className="footer-col-new">
              <h3 className="text-h4">Company</h3>
              <ul>
                <li><button onClick={() => navigateTo('about-us')}>About Us</button></li>
                <li><button onClick={() => navigateTo('appointments')}>Contact</button></li>
                <li><button onClick={() => navigateTo('gallery')}>Smile Gallery</button></li>
              </ul>
            </div>
            
            <div className="footer-col-new">
              <h3 className="text-h4">Social</h3>
              <ul>
                <li><a href="#">Instagram</a></li>
                <li><a href="#">LinkedIn</a></li>
                <li><a href="#">Facebook</a></li>
              </ul>
            </div>
          </div>
          
          <div className="footer-bottom-new reveal delay-2">
            <p>© 2026 CrispDent Dental Clinic. All rights reserved.</p>
            <ul className="bottom-links">
              <li><a href="#">Terms and Conditions</a></li>
              <li><a href="#">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}