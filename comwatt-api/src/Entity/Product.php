<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use App\Repository\ProductRepository;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Validator\Constraints as Assert;

#[ORM\Entity(repositoryClass: ProductRepository::class)]
#[ApiResource]
class Product
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(type: 'integer')]
    private $id;

    #[ORM\Column(type: 'string', length: 255)]
    private $title;

    #[ORM\Column]
    #[Assert\Country(alpha3: true)]
    private $country;

    #[ORM\Column(type: 'date')]
    private $year;

    #[ORM\Column(type: 'string', length: 255, nullable: true)]
    private $originalTitle;

    #[ORM\Column(type: 'string', length: 255, nullable: true)]
    private $description;

    #[ORM\Column(type: 'array')]
    #[Assert\Count(min: 1)]
    #[Assert\All([
        new Assert\NotBlank,
        new Assert\Length(max: 50),
        new Assert\Type('string'),
        new Assert\Regex('/^[a-z0-9_\-]+$/')
    ])]
    private $genre;

    #[ORM\Column(type: 'smallint')]
    #[Assert\Type(type: 'integer')]
    #[Assert\Range(
        min: 0,
        max: 10,
    )]
    private $ranking;

    #[ORM\Column(type: 'float')]
    private $price;

    #[ORM\Column(type: 'string', length: 255)]
    #[Assert\Choice(['paper_book', 'e_book', 'audio_book'])]
    private $productType;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getTitle(): ?string
    {
        return $this->title;
    }

    public function setTitle(string $title): self
    {
        $this->title = $title;

        return $this;
    }

    public function getCountry(): ?string
    {
        return $this->country;
    }

    public function setCountry(string $country): self
    {
        $this->country = $country;

        return $this;
    }

    public function getYear(): ?\DateTimeInterface
    {
        return $this->year;
    }

    public function setYear(\DateTimeInterface $year): self
    {
        $this->year = $year;

        return $this;
    }

    public function getOriginalTitle(): ?string
    {
        return $this->originalTitle;
    }

    public function setOriginalTitle(string $originalTitle): self
    {
        $this->originalTitle = $originalTitle;

        return $this;
    }

    public function getDescription(): ?string
    {
        return $this->description;
    }

    public function setDescription(?string $description): self
    {
        $this->description = $description;

        return $this;
    }

    public function getGenre(): ?array
    {
        return $this->genre;
    }

    public function setGenre(?array $genre): self
    {
        $this->genre = $genre;

        return $this;
    }

    public function getRanking(): ?int
    {
        return $this->ranking;
    }

    public function setRanking(int $ranking): self
    {
        $this->ranking = $ranking;

        return $this;
    }

    public function getPrice(): ?float
    {
        return $this->price;
    }

    public function setPrice(float $price): self
    {
        $this->price = $price;

        return $this;
    }

    public function getProductType(): ?string
    {
        return $this->productType;
    }

    public function setProductType(string $productType): self
    {
        $this->productType = $productType;

        return $this;
    }
}
