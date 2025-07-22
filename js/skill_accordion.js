'use strict';

{
    // 要素をスライドしながら非表示
    const slideUp = (e, duration = 300) => {
        e.style.height = e.offsetHeight + "px";
        e.offsetHeight;
        e.style.transitionProperty = "height, margin, padding";
        e.style.transitionDuration = duration + "ms";
        e.style.transitionTimingFunction = "ease";
        e.style.overflow = "hidden";
        e.style.height = 0;
        e.style.paddingTop = 0;
        e.style.paddingBottom = 0;
        e.style.marginTop = 0;
        e.style.marginBottom = 0;

        setTimeout(() => {
            e.style.display = "none";
            e.style.removeProperty("height");
            e.style.removeProperty("padding-top");
            e.style.removeProperty("padding-bottom");
            e.style.removeProperty("margin-top");
            e.style.removeProperty("margin-bottom");
            e.style.removeProperty("overflow");
            e.style.removeProperty("transition-duration");
            e.style.removeProperty("transition-property");
            e.style.removeProperty("transition-timing-function");
            e.classList.remove("is-open");
        }, duration);
    };
    
    // 要素をスライドしながら表示
    const slideDown = (e, duration = 300) => {
        e.classList.add("is-open");
        e.style.removeProperty("display");
        let display = window.getComputedStyle(e).display;

        if (display === "none") {
            display = "block";
        }

        e.style.display = display;
        let height = e.offsetHeight;
        e.style.overflow = "hidden";
        e.style.height = 0;
        e.style.paddingTop = 0;
        e.style.paddingBottom = 0;
        e.style.marginTop = 0;
        e.style.marginBottom = 0;
        e.offsetHeight;
        e.style.transitionProperty = "height, margin, padding";
        e.style.transitionDuration = duration + "ms";
        e.style.transitionTimingFunction = "ease";
        e.style.height = height + "px";
        e.style.removeProperty("padding-top");
        e.style.removeProperty("padding-bottom");
        e.style.removeProperty("margin-top");
        e.style.removeProperty("margin-bottom");

        setTimeout(() => {
            e.style.removeProperty("height");
            e.style.removeProperty("overflow");
            e.style.removeProperty("transition-duration");
            e.style.removeProperty("transition-property");
            e.style.removeProperty("transition-timing-function");
        }, duration);
    };
    
    // 要素をスライドしながら交互に表示/非表示
    const slideToggle = (e, duration = 300) => {
        if (window.getComputedStyle(e).display === "none") {
            return slideDown(e, duration);
        } else {
            return slideUp(e, duration);
        }
    };


  
  // アコーディオンを全て取得
  const accordions = document.querySelectorAll(".js-accordion");
  // IE対策
  const accordionsArr = Array.prototype.slice.call(accordions);
  
  accordionsArr.forEach((accordion) => {
    const accordionTriggers = accordion.querySelectorAll(".js-accordion-trigger");
    // IE対策
    const accordionTriggersArr = Array.prototype.slice.call(accordionTriggers);
  
    accordionTriggersArr.forEach((trigger) => {
      trigger.addEventListener("click", (e) => {
        accordionTriggersArr.forEach((trigger) => {
          if (trigger !== e.target.parentElement) {
            trigger.classList.remove("is-active");
            const openedContent = trigger.querySelector(".accordion-content");

            slideUp(openedContent);
          }
        });
  
        // .is-activeを付与or削除
        trigger.classList.toggle("is-active");
        const content = trigger.querySelector(".accordion-content");

        // 要素を展開or閉じる
        slideToggle(content);
      });
    });
  });
}
