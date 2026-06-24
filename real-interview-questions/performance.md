# ⚡ Performance & Web Vitals — Real Interview Questions

> Curated from real interview experiences shared on LinkedIn.
> Similar questions are grouped together — alternate phrasings shown as sub-bullets.

---

## 🔹 Core Web Vitals

1. **What are Core Web Vitals? Name all three.**

2. **What is FCP (First Contentful Paint)? How do you improve it?**

3. **What is LCP (Largest Contentful Paint)? How do you improve it?**

4. **What is TTI (Time to Interactive)? How do you improve it?**

3. **What is INP (Interaction to Next Paint, formerly FID)? How do you improve it?**

4. **What is CLS (Cumulative Layout Shift)? How do you improve it?**
   - _Also asked as:_ How do you detect layout shifts?

5. **What specific changes took you from Core Web Vitals score 74 to 90+?**
    - _Also asked as:_ Walk through the exact optimizations you made.

6. **How do you translate metrics like TTI, FCP, CLS into business-friendly language?**

---

## 🔹 Performance Analysis

6. **What's the first step to improve an existing website's performance?**

7. **How do you analyze page load using DevTools?**
   - _Also asked as:_ Which metrics do you track? (FCP, LCP, CLS, TTI)

9. **What tools have you used for performance analysis? (Lighthouse, WebPageTest, etc.)**
   - _Also asked as:_ Lighthouse Auditing & CI Integration.

10. **What is TTFB and how do you reduce it?**

---

## 🔹 Optimization Techniques

10. **What is Code Splitting? How do you implement it in React?**

11. **What is Tree Shaking? What actually gets removed?**

12. **Reducing bundle size and optimizing assets.**
    - _Also asked as:_ Bundle analysis and optimization.

13. **Dynamic imports done right — explain.**

14. **Debouncing & throttling for performance.**

15. **Identifying memory leaks using DevTools.**
    - _Also asked as:_ How do you identify and fix memory leaks in the browser?

---

## 🔹 Asset Optimization

16. **Image Optimization — srcset, WebP, AVIF, blur placeholders.**
    - _Also asked as:_ How do you serve responsive images?

17. **Font Optimization — font-display, preload, subsetting.**
    - _Also asked as:_ How do you prevent layout shift caused by font loading?

18. **Resource Hints — preload, prefetch, preconnect, dns-prefetch.**
    - _Also asked as:_ What is the difference between preload and prefetch?

19. **Lazy Loading — Images, Components, Routes.**
    - _Also asked as:_ How do you implement lazy loading for different resource types?

---

## 🔹 Browser Rendering Performance

15. **Critical Rendering Path and Reflow/Repaint.**

16. **How does the browser calculate layout?**

---

## 🔹 Caching

17. **Browser caching strategies (304 vs fresh).**

18. **HTTP/2 vs HTTP/3 implications for Frontend.**

---

## 🔹 Monitoring

19. **RUM vs Synthetic Monitoring — what's the difference?**

20. **Production debugging without source maps.**

21. **Source maps in production — pros and cons.**

22. **How would you build frontend monitoring and logging for production issues?**

23. **What are the advantages of using a Content Delivery Network (CDN)?**

24. **How do service workers enhance web performance?**

25. **How do you reduce Time to Interactive (TTI)?**

26. **What are common memoization pitfalls?**
    - _Also asked as:_ When should you NOT use useMemo?

27. **How do you handle caching on a website? (Client-side + Server-side)**
    - _Also asked as:_ What are frontend caching strategies?
