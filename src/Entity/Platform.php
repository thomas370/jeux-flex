<?php

namespace App\Entity;

use ApiPlatform\Metadata\ApiResource;
use ApiPlatform\Metadata\Delete;
use ApiPlatform\Metadata\Get;
use ApiPlatform\Metadata\GetCollection;
use ApiPlatform\Metadata\Patch;
use ApiPlatform\Metadata\Post;
use ApiPlatform\Metadata\Put;
use App\Repository\PlatformRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;

#[ORM\Entity(repositoryClass: PlatformRepository::class)]
#[ApiResource(
    operations: [
        new Get(),
        new GetCollection(),
        new Post(),
        new Put(),
        new Patch(),
        new Delete()
    ],
    normalizationContext: ['groups' => ['platform_read']]
)]
class Platform
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    #[Groups(["platform_read", "jeux_read"])]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    #[Groups(["platform_read", "jeux_read"])]
    private ?string $platform = null;

    #[ORM\Column(type: Types::TEXT)]
    #[Groups(["platform_read", "jeux_read"])]
    private ?string $logo = null;

    #[ORM\OneToMany(mappedBy: 'id_plat', targetEntity: Jeux::class)]
    #[Groups(["platform_read", "jeux_read"])]
    private Collection $jeuxes;

    public function __construct()
    {
        $this->jeuxes = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getPlatform(): ?string
    {
        return $this->platform;
    }

    public function setPlatform(string $platform): self
    {
        $this->platform = $platform;

        return $this;
    }

    public function getLogo(): ?string
    {
        return $this->logo;
    }

    public function setLogo(string $logo): self
    {
        $this->logo = $logo;

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
            $jeux->setIdPlat($this);
        }

        return $this;
    }

    public function removeJeux(Jeux $jeux): self
    {
        if ($this->jeuxes->removeElement($jeux)) {
            // set the owning side to null (unless already changed)
            if ($jeux->getIdPlat() === $this) {
                $jeux->setIdPlat(null);
            }
        }

        return $this;
    }
}
