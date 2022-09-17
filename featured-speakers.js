const card = {
  imge: ['images/hero_bg.svg', 'images/hero_bg.svg', 'images/hero_bg.svg', 'images/hero_bg.svg'],
  name: ['Ahmed Najash', 'Sakina Bachani', 'Jane Doe', 'Mimea Panda'],
  background: ['Robotics Engineer Ict Authority', 'Systems Admin Port Authority', 'Social Services Worker New York', 'Director of Agriculture Board in kenya'],
  description: ['Presents the implementation of robotics in plants', 'Distribution and allocation of the plants through the system', 'A selection of farming needs to the different urban locations', 'Incharge of the Agricultural subsidization and reform of laws for vertical farming'],
};
const speakers = document.getElementById('speaker');

const featured = document.createElement('h2');
const textFeatured = document.createTextNode('Featured Speakers');
textFeatured.className = 'speaker__heading';
featured.appendChild(textFeatured);

const speakersDiv = document.createElement('div');
speakersDiv.className = 'speakers__div';
const line = document.createElement('span');
line.className = 'underline';

speakers.appendChild(featured);
speakers.appendChild(line);

for (let i = 0; i < card.imge.length; i += 1) {
  const article = document.createElement('article');
  article.className = 'speaker';

  const images = document.createElement('img');
  images.src = './images/speaker1.png';
  images.className = 'speaker__image';

  const imageDiv = document.createElement('div');
  imageDiv.className = 'speaker__div';

  const speakerDiv = document.createElement('div');
  speakerDiv.className = 'speaker__card';
  const innerDiv = document.createElement('div');
  innerDiv.className = 'speaker__about';

  const headingSpeaker = document.createElement('h3');
  const speakerName = document.createTextNode(card.name[i]);
  headingSpeaker.className = 'speaker__name';
  headingSpeaker.appendChild(speakerName);

  const paragraphSpeaker = document.createElement('p');
  const backgroundSpeaker = document.createTextNode(card.background[i]);
  paragraphSpeaker.className = 'speaker__background';
  paragraphSpeaker.appendChild(backgroundSpeaker);

  const paragraphSpeaker2 = document.createElement('p');
  const descriptionSpeaker = document.createTextNode(card.description[i]);
  paragraphSpeaker2.className = 'speaker__description';
  paragraphSpeaker2.appendChild(descriptionSpeaker);

  const button = document.createElement('button');
  button.className = 'speaker__button';
  button.innerText = 'See Project';
  button.href = '#';

  imageDiv.appendChild(images);
  innerDiv.appendChild(headingSpeaker);
  innerDiv.appendChild(paragraphSpeaker);
  innerDiv.appendChild(paragraphSpeaker2);
  speakerDiv.appendChild(innerDiv);
  article.appendChild(imageDiv);
  article.appendChild(speakerDiv);
  speakersDiv.appendChild(article);
  speakers.appendChild(speakersDiv);
}
