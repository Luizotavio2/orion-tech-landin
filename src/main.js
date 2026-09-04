import './style.css'
import imageUrl from './assets/ben-10-safada.png'

const app = document.querySelector('#app')

app.innerHTML = `
  <main class="funny-card">
    <section class="copy-block">
      <h1>Oi, casada?</h1>
    </section>

    <div class="image-placeholder" aria-label="Espaço para imagem">
      <img src="${imageUrl}" alt="">
    </div>
  </main>
`

