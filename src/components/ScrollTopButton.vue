<template>
    <a :class="scrollUpClass" href="#">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 6">
            <path d="M12 6H0l6-6z" />
        </svg>
        <span class="screen-reader-text">Back to top</span>
    </a>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const scrollUpClass = ref('top-link hide');
const scrollFunc = () => {
    let y = window.scrollY;
    if (y > 0) {
        scrollUpClass.value = "top-link show";
    } else {
        scrollUpClass.value = "top-link hide";
    }
};
window.addEventListener("scroll", scrollFunc);

</script>

<style scoped>
.top-link {
    transition: all .25s ease-in-out;
    position: fixed;
    bottom: 0;
    right: 0;
    display: inline-flex;

    cursor: pointer;
    align-items: center;
    justify-content: center;
    margin: 0 3em 3em 0;
    border-radius: 50%;
    padding: .25em;
    width: 80px;
    height: 80px;
    background-color: var(--anchor-background);
}

.show {
    visibility: visible;
    opacity: 1;
}

.hide {
    visibility: hidden;
    opacity: 0;
}

svg {
    fill: #000;
    width: 24px;
    height: 12px;
}

.screen-reader-text {
    position: absolute;
    clip-path: inset(50%);
    margin: -1px;
    border: 0;
    padding: 0;
    width: 1px;
    height: 1px;
    overflow: hidden;
    word-wrap: normal !important;
    clip: rect(1px, 1px, 1px, 1px);

    &:focus {
        display: block;
        top: 5px;
        left: 5px;
        z-index: 100000;
        clip-path: none;
        background-color: #eee;
        padding: 15px 23px 14px;
        width: auto;
        height: auto;
        text-decoration: none;
        line-height: normal;
        color: #444;
        font-size: 1em;
        clip: auto !important;
    }
}


a {
    display: block;
    color: black;
    background-color: var(--anchor-background);
    padding: 0.3em;
    text-decoration: none;
    text-transform: uppercase;
}

a:hover {
    background-color: var(--section-heading);
    color: white;
}

a:active {
    background-color: black;
}
</style>
