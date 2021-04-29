import styled from "styled-components";

const StyledParts = styled.div`
  .part {
    display: block;
    margin-bottom: 15px;
  }
  .part p {
    font-weight: 600;
  }
  .part a {
    display: block;
    overflow-wrap: break-word;
  }
  h2 {
    border-bottom: 2px dashed purple;
    padding-bottom: 10px;
    display: block;
    margin-bottom: 30px;
  }
`

export default function Parts() {
  return (
    <StyledParts>
      <div className="text-center">
        <h2>Parts List</h2>
      </div>
      <p className="mb-10">The car so far has been modified to be a solid daily driver with a few extra parts for visual improvements. Performance mods will begin in 2022.</p>
      <div className="part">
        <p>LED Fog Lights</p>
        <a href="https://www.vette-lights.com/products/1984-1996-c4-corvette-55w-hid-fog-light-conversion-kit-super-bright">https://www.vette-lights.com/products/1984-1996-c4-corvette-55w-hid-fog-light-conversion-kit-super-bright</a>
      </div>
      <div className="part">
        <p>LED Brake Lights</p>
        <a href="https://www.zip-corvette.com/91-96-led-tail-lamp-lens-bulb-set.html">https://www.zip-corvette.com/91-96-led-tail-lamp-lens-bulb-set.html</a>
      </div>
      <div className="part">
        <p>Center LED Tail Light</p>
        <a href="https://www.amazon.com/Third-Chrome-Housing-Chevrolet-Corvette/dp/B084D388MR/ref=mp_s_a_1_6?dchild=1&keywords=c4+corvette+tail+light+led&qid=1612546959&sr=8-6&th=1&psc=1">https://www.amazon.com/Third-Chrome-Housing-Chevrolet-Corvette/dp/B084D388MR/ref=mp_s_a_1_6?dchild=1&keywords=c4+corvette+tail+light+led&qid=1612546959&sr=8-6&th=1&psc=1</a>
      </div>
      <div className="part">
        <p>OE CV01 Wheels</p>
        <a href="https://www.oewheelsllc.com/CV01-17095-black-rims-for-Corvette-ZR1-style-wheel-set?quantity=2">https://www.oewheelsllc.com/CV01-17095-black-rims-for-Corvette-ZR1-style-wheel-set?quantity=2</a>
      </div>
      <div className="part">
        <p>Corsa Exhaust (w Black Tips)</p>
        <a href="https://www.topflightautomotive.com/products/corsa-1996-chevrolet-corvette-2-5-cat-back-dual-rear-exit-with-twin-3-5-black-pvd-pro-series-tips/?gclid=CjwKCAjwj6SEBhAOEiwAvFRuKM6DIU6aDOv1PLClPXYkWnh8cmwi9ViLJvlMz3ch2NbG8aouNxO6BxoCOakQAvD_BwE">https://www.topflightautomotive.com/products/corsa-1996-chevrolet-corvette-2-5-cat-back-dual-rear-exit-with-twin-3-5-black-pvd-pro-series-tips/?gclid=CjwKCAjwj6SEBhAOEiwAvFRuKM6DIU6aDOv1PLClPXYkWnh8cmwi9ViLJvlMz3ch2NbG8aouNxO6BxoCOakQAvD_BwE</a>
      </div>
    </StyledParts>
  )
}