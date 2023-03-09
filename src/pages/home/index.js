import React, { useState } from 'react';
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

const RandomItemGenerator = () => {
    const [randomItem, setRandomItem] = useState('');
    const [itemFilename, setItemFilename] = useState('');

    const generateRandomItem = () => {
        const randomIndex = Math.floor(Math.random() * imageFilenames.length);
        const filename = imageFilenames[randomIndex];
        setRandomItem(filename);
        setItemFilename(filename);
    };

    return (
        <div>
            <h1>Random Item Generator</h1>
            {randomItem && <img src={require(`../../assets/Items/${itemFilename}.png`)} alt="random item" />}
            {itemFilename && <p>{itemFilename}</p>}
            <button onClick={generateRandomItem}>Generate Random Item</button>
        </div>
    );
};

export default RandomItemGenerator;