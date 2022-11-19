import React from 'react';
import { ReactDOM } from 'react';
import Carousel from 'react-material-ui-carousel';
import { Paper, Button } from '@mui/material'
import asan from '../../../public/assets/ASAN-logo.png'
import awn from '../../../public/assets/AWN-Logo.png';
import unmasking from '../../../public/assets/Unmasking.jpg'
import intersections from '../../../public/assets/Intersections.png';


const ResourceCarousel = () => {
  var items = [
    {
      name: 'Autistic Self Advocacy Network',
      description: 'The Autistic Self Advocacy Network seeks to advance the principles of the disability rights movement with regard to autism. ASAN believes that the goal of autism advocacy should be a world in which autistic people enjoy equal access, rights, and opportunities. We work to empower autistic people across the world to take control of our own lives and the future of our common community, and seek to organize the autistic community to ensure our voices are heard in the national conversation about us. Nothing About Us, Without Us!',
      image: asan,
      link: 'https://autisticadvocacy.org/'
    },
    {
      name: 'Unmasking Autism: Discovering the New Faces of Neurodiversity, by Dr. Devon Price',
      description: 'A deep dive into the spectrum of Autistic experience and the phenomenon of masked Autism, giving individuals the tools to safely uncover their true selves while broadening society’s narrow understanding of neurodiversity. For every visibly Autistic person you meet, there are countless “masked” Autistic people who pass as neurotypical. Masking is a common coping mechanism in which Autistic people hide their identifiably Autistic traits in order to fit in with societal norms, adopting a superficial personality at the expense of their mental health. This can include suppressing harmless stims, papering over communication challenges by presenting as unassuming and mild-mannered, and forcing themselves into situations that cause severe anxiety, all so they aren’t seen as needy or “odd.” ' ,
      descriptionElaborated: "In Unmasking Autism, Dr. Devon Price shares his personal experience with masking and blends history, social science research, prescriptions, and personal profiles to tell a story of neurodivergence that has thus far been dominated by those on the outside looking in. For Dr. Price and many others, Autism is a deep source of uniqueness and beauty. Unfortunately, living in a neurotypical world means it can also be a source of incredible alienation and pain. Most masked Autistic individuals struggle for decades before discovering who they truly are. They are also more likely to be marginalized in terms of race, gender, sexual orientation, class, and other factors, which contributes to their suffering and invisibility. Dr. Price lays the groundwork for unmasking and offers exercises that encourage self-expression, including: Celebrating special interests, Cultivating Autistic relationships, Reframing Autistic stereotypes, And rediscovering your values. It’s time to honor the needs, diversity, and unique strengths of Autistic people so that they no longer have to mask—and it’s time for greater public acceptance and accommodation of difference. In embracing neurodiversity, we can all reap the rewards of nonconformity and learn to live authentically, Autistic and neurotypical people alike.",
      image: unmasking,
      link: 'https://www.amazon.com/Unmasking-Autism-Discovering-Faces-Neurodiversity/dp/B09BBM2WQJ/'
    },
    {
      name: 'Autistic Women & Nonbinary Network',
      description: 'The mission of Autistic Women & Nonbinary Network (AWN) is to provide community support, and resources for Autistic women, girls, transfeminine and transmasculine nonbinary people, trans people of all genders, Two Spirit people, and all people of marginalized genders or of no gender. AWN is committed to recognizing and celebrating diversity and the many intersectional experiences in our community.',
      image: awn,
      link: 'https://awnnetwork.org/'
    },
    {
      name: 'Autistic Women & Nonbinary Network (continued)',
      description: 'I am a Black, queer, disabled, and non-binary individual. This is quite an interesting intersection to live at and one that I feel is important to discuss. I have multiple disabilities, autism being one of them. I am often asked to speak on disability since I am a disabled scientist, as well as a disabled activist. Within this article, I plan to expand on the topic of race and autism from both points of view by delivering data and statistics, as well as discussing the societal factors and experiences that impact those of us living at this unique intersection. I will focus on diagnostic disparities as a way of inviting readers to broader conversations on intersections of disability and race.',
      image: intersections,
      link: 'https://awnnetwork.org/the-intersections-of-race-and-autism-diagnostic-disparities-and-marginalized-existence/'
    },
  ];

  function Item(props) {
    return (
      <Paper className="carousel-card">
        <div className="carousel-card-wrapper">
            <h2>{props.item.name}</h2>
            <div className="carousel-interior-wrapper">
              <div className="carousel-img-wrapper">
                <img className="carousel-img" src={props.item.image}></img>
              </div>
              <div className="card-description-wrapper">
                <p className="card-description"><cite>{props.item.description}</cite></p>
                <p className="card-description">{props.item.descriptionElaborated}</p>
              </div>
            </div>
            <br></br>
            <a target="_blank" href={props.item.link}><Button className="CheckButton">Check it out!</Button></a>
          <br></br>
        </div>
      </Paper>
    );
  }

  return (
    <>
      <div id="resourceCarousel">
        <Carousel>
          {items.map((item, i) => (
            <Item key={i} item={item} />
          ))}
        </Carousel>
      </div>
    </>
  );
};

export default ResourceCarousel;
