<?php

namespace App\Entity;

use ApiPlatform\Metadata\ApiResource;
use App\Repository\TypeRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: TypeRepository::class)]
#[apiResource]
class Type
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $type = null;

    #[ORM\OneToMany(mappedBy: 'id_type', targetEntity: Jeux::class)]
    private Collection $jeuxes;

    public function __construct()
    {
        $this->jeuxes = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getType(): ?string
    {
        return $this->type;
    }

    public function setType(?string $type): self
    {
        $this->type = $type;

        return $this;
    }

    /**
     * @return Collection<int, Jeux>
     */
    public function getJeuxes(): Collection
    {
        return $this->jeuxes;
    }

    public function addJeux(Jeux $jeux): self
    {
        if (!$this->jeuxes->contains($jeux)) {
            $this->jeuxes->add($jeux);
            $jeux->setIdType($this);
        }

        return $this;
    }

    public function removeJeux(Jeux $jeux): self
    {
        if ($this->jeuxes->removeElement($jeux)) {
            // set the owning side to null (unless already changed)
            if ($jeux->getIdType() === $this) {
                $jeux->setIdType(null);
            }
        }

        return $this;
    }
}
