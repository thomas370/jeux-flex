<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20230517123842 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE panier_jeux (panier_id INT NOT NULL, jeux_id INT NOT NULL, INDEX IDX_C3B39074F77D927C (panier_id), INDEX IDX_C3B39074EC2AA9D2 (jeux_id), PRIMARY KEY(panier_id, jeux_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE panier_jeux ADD CONSTRAINT FK_C3B39074F77D927C FOREIGN KEY (panier_id) REFERENCES panier (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE panier_jeux ADD CONSTRAINT FK_C3B39074EC2AA9D2 FOREIGN KEY (jeux_id) REFERENCES jeux (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE panier CHANGE id_user_id id_user_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE user CHANGE id id INT NOT NULL');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE panier_jeux DROP FOREIGN KEY FK_C3B39074F77D927C');
        $this->addSql('ALTER TABLE panier_jeux DROP FOREIGN KEY FK_C3B39074EC2AA9D2');
        $this->addSql('DROP TABLE panier_jeux');
        $this->addSql('ALTER TABLE user CHANGE id id INT NOT NULL');
        $this->addSql('ALTER TABLE panier CHANGE id_user_id id_user_id INT DEFAULT NULL');
    }
}
