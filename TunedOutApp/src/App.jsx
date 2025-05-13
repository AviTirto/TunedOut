import { useState, useEffect } from 'react'
import './App.css'
import TextTransition, { presets } from 'react-text-transition';
import { Card, CardHeader, CardTitle, CardDescription } from './components/ui/card';
import { Button } from './components/ui/button';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './components/ui/carousel';

const TEXTS = ['In', 'Out'];

function App() {

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      2000, // every 2 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);

  return (
    <>
      <div className='noise h-screen bg-red-500 pt-20'>
        <div className='flex'>
          <h1 className='handwritten w-full text-right text-8xl text-white m-2'>Tuned</h1>
          <h1 className='handwritten w-full text-left text-8xl text-white m-2'>
            <TextTransition springConfig={presets.wobbly}>{TEXTS[index % TEXTS.length]}</TextTransition>
          </h1>
        </div>
        <div className='w-full px-50 pt-10'>
          <Carousel>
            <CarouselContent className="flex">
              <CarouselItem>
                <div className='flex gap-10'>
                  <Card className="bg-transparent flex-1">
                    <CardHeader>
                      <CardTitle className="handwritten text-white text-3xl">Create a Game</CardTitle>
                      <CardDescription className="text-white">Start a new music guessing game and invite friends.</CardDescription>
                      <Button variant="outline">Create Game</Button>
                    </CardHeader>
                  </Card>
                  <Card className="bg-transparent flex-1">
                    <CardHeader>
                      <CardTitle className="handwritten text-white text-3xl">Join a Game</CardTitle>
                      <CardDescription className="text-white">Enter a room code to join an existing game.</CardDescription>
                      <Button variant="outline">Join Game</Button>
                    </CardHeader>
                  </Card>
                </div>
              </CarouselItem>
              <CarouselItem>
              <div className='flex gap-10'>
                  <Card className="bg-transparent flex-1">
                    <CardHeader>
                      <CardTitle className="handwritten text-white text-3xl">Create a Game</CardTitle>
                      <CardDescription className="text-white">Start a new music guessing game and invite friends.</CardDescription>
                      <Button variant="outline">Create Game</Button>
                    </CardHeader>
                  </Card>
                  <Card className="bg-transparent flex-1">
                    <CardHeader>
                      <CardTitle className="handwritten text-white text-3xl">Join a Game</CardTitle>
                      <CardDescription className="text-white">Enter a room code to join an existing game.</CardDescription>
                      <Button variant="outline">Join Game</Button>
                    </CardHeader>
                  </Card>
                </div>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </>
  );
}

export default App
