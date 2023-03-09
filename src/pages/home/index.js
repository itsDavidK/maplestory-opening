import React, { useState, useEffect } from 'react';
import "./style.css"

const imageFilenames = [
    'babybinkie',
    'babybinkiebonnet',
    'babybinkiespacesuit',
    'babybinkietoys',
    'bananacardigan',
    'bananaoveralls',
    'bananapeelspecs',
    'bananappealhat',
    'bananashake',
    'barriershoes',
    'barrierwave',
    'blackpandabuckethat',
    'blacksleeveoversizedoutfit',
    'chainbarrier',
    'chainwhirlwind',
    'cherryrabbithood',
    'fantabulousfruit',
    'flowerShoesM',
    'friendlybearweapon',
    'gothbunny',
    'lightningsneakers',
    'luminwings',
    'mismatchedshorts',
    'oversizedfloralshirt',
    'petalfalls',
    'petalgardenM',
    'petalpromise',
    'petalribbon',
    'picnicbasketweapon',
    'pinksleeveoversizedoutfit',
    'pokerfaceaccessory',
    'pokerfacebunnyears',
    'relaxedfitjeans',
    'roarsnapback',
    'shadeseal',
    'softbrownteddyfleece',
    'softbrownteddyhoodie',
    'softivoryteddyfleece',
    'softivoryteddyhoodie',
    'springhuedscepter',
    'springsparkles',
    'springsweaterset',
    'springsymphonycrown',
    'springsymphonyM',
    'springsymphonyshoes',
    'springsymphonytiara',
    'sweetdreampanda',
    'sweetdreamwhitebear',
    'whitebearheadband',
    'woodenteaspoonweapon'
];

const RANKS = [
    { name: 'Bronze 1', nxThreshold: 10000 },
    { name: 'Bronze 2', nxThreshold: 100000 },
    { name: 'Bronze 3', nxThreshold: 200000 },
    { name: 'Silver', nxThreshold: 300000 },
    { name: 'Gold', nxThreshold: 600000},
    { name: 'Diamond', nxThreshold: 900000},
    { name: 'Red', nxThreshold: 1500000}
  ];

const RandomItemGenerator = () => {
    const [randomItem, setRandomItem] = useState('');
    const [itemFilename, setItemFilename] = useState('');
    const [cubes, setCubes] = useState(0);
    const [nx, setNx] = useState(0);
    const [rank, setRank] = useState('');

    useEffect(() => {
        // Find the highest rank that the user has achieved
        const newRank = RANKS.reduce((acc, rank) => {
          if (nx >= rank.nxThreshold) {
            return rank.name;
          }
          return acc;
        }, '');
        setRank(newRank);
      }, [nx]);
    

    const dollars = (nx / 1000).toFixed(2);

    const generateRandomItem = () => {
        if (cubes >= 1) {
        const randomIndex = Math.floor(Math.random() * imageFilenames.length);
        const filename = imageFilenames[randomIndex];
        setRandomItem(filename);
        setItemFilename(filename);
        setCubes(cubes - 1);
        }
    };

    const getCubesSingle = (numCubes) => {
        setCubes(cubes + numCubes);
        setNx(nx + 3400);
    };

    const getCubesPack = (numCubes) => {
        setCubes(cubes + numCubes);
        setNx(nx + 34000);
    };

    return (
        <div>
            <h1>Random Item Generator</h1>
            {randomItem && <img src={require(`../../assets/Items/${itemFilename}.png`)} alt="random item" />}
            {itemFilename && <p>{itemFilename}</p>}
            <p>Cubes: {cubes}</p>
            <p>NX: {nx}</p>
            <p>Dollars: ${dollars}</p>
            <p>Rank: {rank}</p>
            <button onClick={() => getCubesSingle(1)}>Get 1 Cube</button>
            <button onClick={() => getCubesPack(11)}>Get 11 Cubes</button>
            <button onClick={generateRandomItem} disabled={cubes < 1}>Generate Random Item</button>
        </div>
    );
};

export default RandomItemGenerator;