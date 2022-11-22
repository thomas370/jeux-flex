<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20221122145521 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE user (id INT AUTO_INCREMENT NOT NULL, pseudo VARCHAR(255) NOT NULL, password VARCHAR(255) NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE jeux DROP FOREIGN KEY FK_3755B50DEC2AA9D2');
        $this->addSql('DROP INDEX IDX_3755B50DEC2AA9D2 ON jeux');
        $this->addSql('ALTER TABLE jeux DROP jeux_id');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('DROP TABLE user');
        $this->addSql('ALTER TABLE jeux ADD jeux_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE jeux ADD CONSTRAINT FK_3755B50DEC2AA9D2 FOREIGN KEY (jeux_id) REFERENCES avis (id)');
        $this->addSql('CREATE INDEX IDX_3755B50DEC2AA9D2 ON jeux (jeux_id)');
    }
}
