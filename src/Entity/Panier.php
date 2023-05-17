<?php

namespace App\Entity;

use ApiPlatform\Metadata\ApiResource;
use App\Repository\PanierRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: PanierRepository::class)]
#[ApiResource]
class Panier
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\OneToOne(inversedBy: 'panier', cascade: ['persist', 'remove'])]
    private ?User $id_user = null;

    #[ORM\ManyToMany(targetEntity: Jeux::class, inversedBy: 'paniers')]
    private Collection $id_jeux;

    public function __construct()
    {
        $this->id_jeux = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getIdUser(): ?User
    {
        return $this->id_user;
    }

    public function setIdUser(?User $id_user): self
    {
        $this->id_user = $id_user;

        return $this;
    }

    /**
     * @return Collection<int, Jeux>
     */
    public function getIdJeux(): Collection
    {
        return $this->id_jeux;
    }

    public function addIdJeux(Jeux $idJeux): self
    {
        if (!$this->id_jeux->contains($idJeux)) {
            $this->id_jeux->add($idJeux);
        }

        return $this;
    }

    public function removeIdJeux(Jeux $idJeux): self
    {
        $this->id_jeux->removeElement($idJeux);

        return $this;
    }
}
