<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Stefan Bernkilde - Process</title>
    <meta name="robots" content="noindex">
    <link type="text/css" rel="stylesheet" href="../../css/style.css">
    <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700,800" rel="stylesheet">
    <link rel="shortcut icon" href="../../favicon.ico">
  </head>
  <body>
    <main>
      <section id="process-container">
        <div class="process-page-head">
          <h1>Bomberman Animation</h1>
        </div>
        <div class="process-img">
          <img alt="CSS flag" src="../process-media/bomberman-animation.png">
        </div>
        <div class="process-btn">
          <a class="btn-red" href="../process-media/bomberman-animation/css-animation.html" target="_blank">Se CSS-animation</a>
        </div>
        <div class="process-subtext">
          <p>Animation lavet i CSS udfra et billede som er tegnet i Adobe Illustrator</p>
        </div>
        <div class="process-text">
          <p class="process-chapter">Idéudvikling</p>
          <p>
            Jeg startede med pen og papir for at tegne et storyboard om hvordan min animation skulle tage sig ud. Jeg ville gerne lave noget humoristisk som man kunne grine ad. Frem for alt ville jeg i den korte animation nå at fortælle en lille historie med en handling og en afslutning i.
          </p>
          <div class="process-btn">
            <a class="btn-red" href="../process-media/bomberman-animation-story-img.png" target="_blank">Se storyboard</a>
          </div>
          <div class="process-subtext">
            <p>Storyboard lavet med pen og papir</p>
          </div>
          <p class="process-chapter">Proces - Illustrator</p>
          <p>
            Efter at have tegnet hele historien ned på pen og papir og besluttede mig for hvor mange frames min animation skulle indeholde, begyndte jeg at tegne den første frame inde i Illustrator. Efter jeg havde gjort det kopierede jeg baggrunden fra den på samtlige de andre frames da denne ikke skulle animere. Herefter begyndte jeg at animere manden der skulle hen over billedet. Jeg lavede små rotationsbevægelser mellem hver frame i hans ben og arme for at give en gå animations effekt. Samme princip er brugt når han rækker ned efter bomben og kaster den.
          </p>
          <p class="process-chapter">Proces - CSS</p>
          <p>
            Det hele blev bragt til livs ved hjælp af css. Man lavede et div-element i html som man defnerede højden og bredden på i css. Den højde og bredde man defnere her skal være størrelsen på én frame i ens animaiton. Herefter sætter man billedet ind som baggrundsbillede ved hjælp af “ bagground: url(‘flnavn‘) “ hvor flnavn er stien til der hvor man har lagt sin png-fl. De to 0’er er for at fortælle at animationen skal starte i øverste venstre hjørne. “no-repeat” fortæller at animationen ikke skal kører fere gange på siden. “ webkit-animation: “ er her vi fortæller hvor lang vores animation skal være samt hvor mabge steps (frames) den indeholder. Til sidst fortæller vi hvor mange gange animationen skal kører. I mit tilfælde har jeg sat den til infnite som betyder at ani-mationen kører for evigt. “ @-webkit-keyframes “ er her jeg animere selve vores billede til at kører henover skærmen så det ligner en animation. Jeg siger først at ved 0% skal posi-tionen på billede være 0px, altså helt til venstre i animationen. Og positionen ved 100% (slut) er så størrelsen på hele billedets bredde. Altså så den fra 0% (begyndelsen) til 100% (slutningen) kører hele vejen igennem billedet.
          </p>
          <div class="process-btn">
            <a class="btn-red" href="../process-media/bomberman-animation-code-img.png" target="_blank">Se CSS-koden</a>
          </div>
          <div class="process-subtext">
            <p>CSS koden brugt til at bringe billedet fra Illustartor til livs</p>
          </div>
          <p class="process-chapter">Kritisk reflektion</p>
          <p>
            Jeg ville gerne have lavet noget mere stilrent, men det var svært når jeg samtidig ville lave en så lang animation inden for den givne tidsramme. Derudover ville jeg gerne have haft min animation i en størere opløsning som jeg skulle have testet med en enkel frame før jeg begyndte på at designe alle de andre frames.
          </p>
        </div>
      </section>
    </main>
    <script src="../../js/javascript.js"></script>
  </body>
</html>
