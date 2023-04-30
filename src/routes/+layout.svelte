<script>
  import '@picocss/pico'
  import "../app.postcss";
  import Header from '$components/Header.svelte'
  import Footer from '$components/Footer.svelte';
</script>

<Header></Header>

<main>
  <div class="container">
    <slot></slot>
  </div>
</main>

<Footer></Footer>