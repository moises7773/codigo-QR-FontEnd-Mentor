
import './App.css'
import qrCode from "./assets/image-qr-code.png";

function App() {
return (
  <>
<main>
  <img src={qrCode} alt='QR code to visit Frontend Mentor'/>
  <section>
    <h1>Improve your front-end skills by building projects</h1>
    <p>Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
  </section>
</main>
  </>
)
}
export default App