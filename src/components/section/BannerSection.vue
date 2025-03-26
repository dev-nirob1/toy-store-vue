<script setup lang="ts">
import BaseButton from '../element/BaseButton.vue';
import BaseImage from '../element/BaseImage.vue';
import HeroTitle from '../element/HeroTitle.vue';
import Paragraph from '../element/Paragraph.vue';
</script>

<template>
  <section class="container hero">
        <div class="height-full width-full relative">
            <BaseImage image="/banner.webp"></BaseImage>
            <div class="hero-content">
                <div>
                    <HeroTitle>
                        Plant a Tree, <br> Grow a Greener Future
                    </HeroTitle>
                    <Paragraph>
                        Join the movement to make the world greener, one tree at a time. Discover eco-friendly trees to
                        plant in your garden, donate for reforestation, and contribute to a sustainable future.
                    </Paragraph>
                    <div class="flex justify-center align-center gap-1">
                        <BaseButton>
                            Learn more
                        </BaseButton>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
.hero {
    height: 100vh;
    width: 100%;
}

.hero-content {
    height: 100%;
    width: 100%;
    color: #fff;
    background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7));
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
}

.hero-content>div {
    max-width: 100%;
}

@media (min-width: 992px) {
    .hero-content>div {
        max-width: 60%;
    }
}
</style>
