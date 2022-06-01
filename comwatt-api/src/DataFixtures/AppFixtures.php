<?php

namespace App\DataFixtures;

use App\Entity\Product;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;
use Faker\Factory;

class AppFixtures extends Fixture
{
    private $faker;
    public function load(ObjectManager $manager): void
    {
        $this->faker = Factory::create();
        $this->manager = $manager;

        for ($i = 0; $i < 50; $i++) {
            $count = mt_rand(1, 2);
            $product = new Product();
            $product->setTitle($this->faker->realText(30));
            $product->setCountry($this->faker->countryISOAlpha3());
            $product->setYear($this->faker->dateTime('now'));
            $product->setDescription($this->faker->sentence(20));
            $product->setPrice($this->faker->randomFloat(1,5,40));
            $product->setRanking($this->faker->numberBetween(0,10));
            $product->setProductType($this->faker->randomElement(['e_book','paper_book','audio_book']));
            $product->setGenre($this->faker->randomElements(['SpaceOpera','CyberPunk','Dystopia', 'PostApocalyptic', 'SteamPunk', 'HardSF', 'Fantasy'], $count));

            $this->manager->persist($product);
            if($product->getCountry() !== 'FRA'){
             $product->setOriginalTitle($this->faker->realText(25));
            }
        }

        $manager->flush();
    }
}