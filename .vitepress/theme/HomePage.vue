<script setup>
import { onMounted, onUnmounted, ref } from 'vue'
import { withBase } from 'vitepress'

const activeSlide = ref(0)
let carouselTimer

const heroSlides = [
  {
    image: '/assets/hero-rock-festival.png',
    label: 'ROCK FANS UNION',
    title: '子子制燥',
    text: '在现场相遇，用噪音记录青春。',
    focus: '66% center',
    tone: 'dark'
  },
  {
    image: '/assets/zizi-poster-stage.png',
    label: 'LIVE TOGETHER',
    title: '子子制燥',
    text: '把合唱、票根和每一次相遇，留给下一场现场。',
    focus: '58% center',
    tone: 'poster'
  }
]

onMounted(() => {
  carouselTimer = window.setInterval(() => {
    activeSlide.value = (activeSlide.value + 1) % heroSlides.length
  }, 5200)
})

onUnmounted(() => {
  window.clearInterval(carouselTimer)
})

const moments = [
  {
    date: '2026.06',
    title: '夏日音乐节',
    place: '草地舞台',
    text: '主舞台前排集合，留下第一次大合照。',
    image: '/assets/hero-rock-festival.png',
    focus: '78% center'
  },
  {
    date: '2025.10',
    title: '秋夜巡演',
    place: 'Livehouse',
    text: '灯光暗下来的瞬间，所有人一起合唱副歌。',
    image: '/assets/hero-rock-festival.png',
    focus: '70% center'
  },
  {
    date: '2025.05',
    title: '城市躁动',
    place: '户外广场',
    text: '从下午到深夜，拍下每一次举手和拥抱。',
    image: '/assets/hero-rock-festival.png',
    focus: '60% center'
  },
  {
    date: '2024.12',
    title: '年末聚会',
    place: '排练室',
    text: '带着票根、贴纸和失真的吉他声收尾这一年。',
    image: '/assets/hero-rock-festival.png',
    focus: '84% center'
  }
]
</script>

<template>
  <main class="zz-page">
    <section class="zz-hero">
      <div
        v-for="(slide, index) in heroSlides"
        :key="slide.image"
        class="zz-hero__slide"
        :class="[{ 'is-active': activeSlide === index }, `is-${slide.tone}`]"
      >
        <img
          class="zz-hero__photo"
          :src="withBase(slide.image)"
          alt="子子制燥全屏海报"
          :style="{ objectPosition: slide.focus }"
        >
      </div>
      <div class="zz-hero__inner">
        <p class="zz-kicker">{{ heroSlides[activeSlide].label }}</p>
        <h1>{{ heroSlides[activeSlide].title }}</h1>
        <p class="zz-hero__copy">{{ heroSlides[activeSlide].text }}</p>
        <div class="zz-hero__dots" aria-label="海报轮播">
          <button
            v-for="(_, index) in heroSlides"
            :key="index"
            type="button"
            :class="{ 'is-active': activeSlide === index }"
            :aria-label="`切换到第 ${index + 1} 张海报`"
            @click="activeSlide = index"
          ></button>
        </div>
      </div>
    </section>

    <section class="zz-section zz-intro" aria-label="组织简介">
      <div>
        <p class="zz-kicker">ABOUT</p>
        <h2>为每一次现场制燥</h2>
      </div>
      <p>子子制燥是由摇滚乐迷组成的松散共同体。我们一起看音乐节、拼车赶巡演、整理现场照片，也为新朋友保留一个能一起喊出声的位置。</p>
    </section>

    <section id="timeline" class="zz-section zz-timeline-section">
      <div class="zz-section__head">
        <p class="zz-kicker">MOMENTS</p>
        <h2>现场时间线</h2>
      </div>
      <div class="zz-timeline">
        <article v-for="(moment, index) in moments" :key="moment.title" class="zz-moment">
          <div class="zz-moment__marker" aria-hidden="true"></div>
          <div class="zz-moment__media">
            <img :src="withBase(moment.image)" :alt="`${moment.title}合照`" :style="{ objectPosition: moment.focus }">
          </div>
          <div class="zz-moment__body">
            <time>{{ moment.date }}</time>
            <h3>{{ moment.title }}</h3>
            <p class="zz-place">{{ moment.place }}</p>
            <p>{{ moment.text }}</p>
          </div>
        </article>
      </div>
    </section>

    <section id="join" class="zz-join">
      <div>
        <p class="zz-kicker">JOIN</p>
        <h2>下一站一起去</h2>
        <p>把下一场音乐节、巡演和合照放进时间线。替换静态资源里的图片后，这里就会成为子子制燥自己的现场档案。</p>
      </div>
      <a href="mailto:hello@example.com" class="zz-button zz-button--primary">联系我们</a>
    </section>
  </main>
</template>
