<?php

namespace App\Entity;

use ApiPlatform\Metadata\ApiResource;
use ApiPlatform\Metadata\Delete;
use ApiPlatform\Metadata\Get;
use ApiPlatform\Metadata\GetCollection;
use ApiPlatform\Metadata\Patch;
use ApiPlatform\Metadata\Post;
use ApiPlatform\Metadata\Put;
use App\Repository\JeuxRepository;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;

#[ORM\Entity(repositoryClass: JeuxRepository::class)]
#[ApiResource(
    operations: [
        new Get(),
        new GetCollection(),
        new Post(),
        new Put(),
        new Patch(),
        new Delete()
    ],
    normalizationContext: ['groups' => ['jeux_read']],
    paginationItemsPerPage: 30,
    paginationMaximumItemsPerPage: 30,
)
]
class Jeux
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    #[Groups(["jeux_read"])]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    #[Groups(["jeux_read"])]
    private ?string $name = null;

    #[ORM\Column(type: Types::TEXT)]
    #[Groups(["jeux_read"])]
    private ?string $description = null;

    #[ORM\Column(nullable: true)]
    #[Groups(["jeux_read"])]
    private ?float $reduction = null;

    #[ORM\Column]
    #[Groups(["jeux_read"])]
    private ?float $prix = null;

    #[ORM\Column(type: Types::DATE_MUTABLE)]
    #[Groups(["jeux_read"])]
    private ?\DateTimeInterface $date = null;

    #[ORM\Column(type: Types::TEXT)]
    #[Groups(["jeux_read"])]
    private ?string $images = null;

    #[ORM\Column(type: Types::TEXT, nullable: true)]
    #[Groups(["jeux_read"])]
    private ?string $video = null;

    #[ORM\Column(length: 255, nullable: true)]
    #[Groups(["jeux_read"])]
    private ?string $editeur = null;

    #[ORM\Column(nullable: true)]
    #[Groups(["jeux_read"])]
    private ?int $stock = null;

    #[ORM\ManyToOne(inversedBy: 'jeuxes')]
    #[ORM\JoinColumn(nullable: false)]
    #[Groups(["jeux_read"])]
    private ?Platform $id_plat = null;

    #[ORM\ManyToOne(inversedBy: 'jeuxes')]
    #[Groups(["jeux_read"])]
    private ?Type $id_type = null;

    #[ORM\Column(type: Types::TEXT)]
    #[Groups(["jeux_read"])]
    private ?string $images_fond = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(string $name): self
    {
        $this->name = $name;

        return $this;
    }

    public function getDescription(): ?string
    {
        return $this->description;
    }

    public function setDescription(string $description): self
    {
        $this->description = $description;

        return $this;
    }

    public function getReduction(): ?float
    {
        return $this->reduction;
    }

    public function setReduction(?float $reduction): self
    {
        $this->reduction = $reduction;

        return $this;
    }

    public function getPrix(): ?float
    {
        return $this->prix;
    }

    public function setPrix(float $prix): self
    {
        $this->prix = $prix;

        return $this;
    }

    public function getDate(): ?\DateTimeInterface
    {
        return $this->date;
    }

    public function setDate(\DateTimeInterface $date): self
    {
        $this->date = $date;

        return $this;
    }

    public function getImages(): ?string
    {
        return $this->images;
    }

    public function setImages(string $images): self
    {
        $this->images = $images;

        return $this;
    }

    public function getVideo(): ?string
    {
        return $this->video;
    }

    public function setVideo(?string $video): self
    {
        $this->video = $video;

        return $this;
    }

    public function getEditeur(): ?string
    {
        return $this->editeur;
    }

    public function setEditeur(?string $editeur): self
    {
        $this->editeur = $editeur;

        return $this;
    }

    public function getStock(): ?int
    {
        return $this->stock;
    }

    public function setStock(?int $stock): self
    {
        $this->stock = $stock;

        return $this;
    }

    public function getIdPlat(): ?Platform
    {
        return $this->id_plat;
    }

    public function setIdPlat(?Platform $id_plat): self
    {
        $this->id_plat = $id_plat;

        return $this;
    }

    public function getIdType(): ?Type
    {
        return $this->id_type;
    }

    public function setIdType(?Type $id_type): self
    {
        $this->id_type = $id_type;

        return $this;
    }

    public function getImagesFond(): ?string
    {
        return $this->images_fond;
    }

    public function setImagesFond(string $images_fond): self
    {
        $this->images_fond = $images_fond;

        return $this;
    }

}
