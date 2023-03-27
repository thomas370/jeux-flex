-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3308
-- Généré le : lun. 27 mars 2023 à 10:23
-- Version du serveur : 5.7.36
-- Version de PHP : 8.0.13

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `jeuxflex`
--

-- --------------------------------------------------------

--
-- Structure de la table `doctrine_migration_versions`
--

DROP TABLE IF EXISTS `doctrine_migration_versions`;
CREATE TABLE IF NOT EXISTS `doctrine_migration_versions` (
  `version` varchar(191) COLLATE utf8_unicode_ci NOT NULL,
  `executed_at` datetime DEFAULT NULL,
  `execution_time` int(11) DEFAULT NULL,
  PRIMARY KEY (`version`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Déchargement des données de la table `doctrine_migration_versions`
--

INSERT INTO `doctrine_migration_versions` (`version`, `executed_at`, `execution_time`) VALUES
('DoctrineMigrations\\Version20221114172814', '2022-11-14 17:28:41', 306),
('DoctrineMigrations\\Version20221115182041', '2022-11-15 18:22:12', 309),
('DoctrineMigrations\\Version20221116103147', '2022-11-16 10:32:30', 255),
('DoctrineMigrations\\Version20221122100549', '2022-11-22 10:07:11', 470),
('DoctrineMigrations\\Version20221122145521', '2022-11-22 14:56:17', 484),
('DoctrineMigrations\\Version20221217095257', '2022-12-17 09:53:18', 268);

-- --------------------------------------------------------

--
-- Structure de la table `jeux`
--

DROP TABLE IF EXISTS `jeux`;
CREATE TABLE IF NOT EXISTS `jeux` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_plat_id` int(11) NOT NULL,
  `id_type_id` int(11) DEFAULT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `reduction` double DEFAULT NULL,
  `prix` double NOT NULL,
  `date` date NOT NULL,
  `images` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `video` longtext COLLATE utf8mb4_unicode_ci,
  `editeur` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `stock` int(11) DEFAULT NULL,
  `images_fond` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`),
  KEY `IDX_3755B50D9A01C10` (`id_plat_id`),
  KEY `IDX_3755B50D1BD125E3` (`id_type_id`)
) ENGINE=InnoDB AUTO_INCREMENT=52 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `jeux`
--

INSERT INTO `jeux` (`id`, `id_plat_id`, `id_type_id`, `name`, `description`, `reduction`, `prix`, `date`, `images`, `video`, `editeur`, `stock`, `images_fond`) VALUES
(2, 1, 2, 'a plague tale requiem', 'L\'appel d\'une île résonne par-delà les mers …\r\nVivez une aventure poignante aux côtés d\'Amicia et Hugo, dans un monde brutal ravagé par des forces obscures.\r\n\r\nFuyant leur passé douloureux, Amicia et son frère voyagent en direction du sud, vers des contrées lointaines et leurs cités marchandes. Ils tentent d\'y prendre un nouveau départ et de contrôler la malédiction d\'Hugo.\r\n\r\nMais lorsque les pouvoirs d\'Hugo ressurgissent, mort et destruction s\'abattent en un fracassant déluge de rats. Forcés de fuir, ils placent leurs espoirs dans une île énigmatique qui pourrait être la clé du salut d\'Hugo.\r\n\r\nDans une lutte désespérée pour survivre, frappez dans l’ombre ou déchaînez les enfers grâce à un arsenal fourni d’équipement et de pouvoirs surnaturels… et découvrez le prix à payer pour sauver les êtres qui vous sont chers.', 31, 34.49, '2022-10-17', 'https://i.ibb.co/sgJ2509/a-plague-tale-requiem.jpg', 'https://s2.gaming-cdn.com/videos/products/9034/800x450/a-plague-tale-requiem-pc-jeu-steam-preview.webm?v=1666094610', 'Focus Entertainment ', 24, 'https://s2.gaming-cdn.com/img/products/9034/pcover/9034.jpg?v=1666096248'),
(3, 1, 3, 'age of empires iii definitive edition', 'Le DLC Knights of the Mediterranean apporte une multitude de nouveau contenu à Age of Empires III: Definitive Edition, y compris l’ajout des civilisations de l\'Italie et de Malte, du tout nouveau mode de jeu Tycoon convivial et décontracté, et du tout premier lot de cartes historiques, qui apporte une rejouabilité sans fin avec quelques surprises.', 29, 7.09, '2022-05-26', 'https://i.ibb.co/BrmgpQf/age-of-empires-iii-definitive-edition-knights-of-the-mediterranean.jpg', 'https://www.instant-gaming.com/videos/products/11272/800x450/age-of-empires-iii-definitive-edition-knights-of-the-mediterranean-xbox-series-x-s-pc-jeu-steam-preview.webm?v=1657044137', 'Xbox Game Studios ', 58, 'https://s3.gaming-cdn.com/img/products/6275/pcover/6275.jpg?v=1652094501'),
(4, 1, 5, 'assetto corsa the american track', 'Le projet du premier circuit américain unique pour tous les championnats majeurs de courses sur pistes a débuté en 2010, à Austin (Texas). Le circuit comporte des sections très complexes qui s\'abordent à des vitesses moyennes très élevées. Il est long de 5,5 km et se situe dans un terrain vallonné qui présente des zones de freinage courtes et très impressionnantes, combinées à d\'autres où il est très facile de prendre de la vitesse dans un temps incroyablement court. Le circuit est apprécié des habitants locaux, car il affiche presque complet à chaque événement majeur, avec un record d\'affluence de 400 000 personnes en un seul week-end de course. ', 30, 12.65, '2022-06-30', 'https://i.ibb.co/h9DrCGf/assetto-corsa-competizione-the-american-track-pack.jpg', 'https://www.instant-gaming.com/videos/products/12430/800x450/assetto-corsa-competizione-the-american-track-pack-pc-jeu-steam-preview.webm?v=1657114681', '505 Games', 10, 'https://s1.gaming-cdn.com/img/products/3153/pcover/3153.jpg?v=1649405560'),
(5, 1, 5, 'assetto corsa ultimate edition', '\"Voici la version la plus complète du simulateur de conduite unanimement salué, contenant toutes les DLC et mises à jour sorties jusqu’à présent (Dream Pack 1-2-3, Tripl3Pack, Porsche Pack 1-2-3, Red Pack, Ready To Race, Pack Japon et Ferrari 70ème anniversaire).', 78, 8.91, '2014-12-19', 'https://i.ibb.co/X7n4SSZ/assetto-corsa-ultimate-edition-ultimate-edition.jpg', 'https://www.instant-gaming.com/videos/products/3098/800x450/assetto-corsa-ultimate-edition-ultimate-edition-pc-jeu-steam-preview.webm?v=1666280438', 'Kunos Simulazioni ', 75, 'https://s1.gaming-cdn.com/img/products/1263/pcover/1263.jpg?v=1666280910'),
(6, 1, 6, 'asterigos curse of the stars', 'Découvrez des secrets tombés dans l\'oubli et des chemins savamment dissimulés dans ce monde de haute fantaisie, foisonnant de combats exaltants et de cartes interconnectées aux innombrables lieux à explorer, sans oublier une histoire immersive où chaque choix compte. Incarnez Hilda, une jeune guerrière intrépide de la légion Ventnordique, qui entreprend un voyage vers la cité maudite pour sauver son père disparu.Les éléments de gameplay inspirés des jeux soulslike, accompagnés d\'un système de combat plus léger et dynamique, créent une nouvelle approche du genre RPG d\'action moderne, vous offrant ainsi un équilibre harmonieux entre difficulté et exploration.', 46, 19.06, '2022-10-11', 'https://i.ibb.co/W6jpctT/asterigos-curse-of-the-stars.jpg', 'https://www.instant-gaming.com/videos/products/9566/800x450/asterigos-curse-of-the-stars-pc-jeu-steam-preview.webm?v=1665586981', 'tinyBuild ', 3, 'https://s3.gaming-cdn.com/img/products/9566/pcover/9566.jpg?v=1665564361'),
(7, 1, 7, 'autobahn police simulator 3', 'Vous incarnez un officier de police débutant, et vous revenez au poste pour la première fois depuis un accident de voiture lors d\'une course-poursuite qui vous a laissé sur la touche quelque temps.\r\nAujourd\'hui, vous avez remis votre uniforme et vous êtes prêt à accomplir votre devoir, alors vous n\'avez pas de temps à perdre assis derrière un bureau. Vous et votre partenaire prenez le volant de votre voiture de fonction pour vous remettre dans le bain, plus que jamais motivé à montrer de quoi vous êtes capable à vos supérieurs et collègues chevronnés', 53, 14.11, '2022-06-23', 'https://i.ibb.co/HBC9bn3/autobahn-police-simulator-3.jpg', 'https://www.instant-gaming.com/videos/products/12343/800x450/autobahn-police-simulator-3-pc-jeu-steam-preview.webm?v=1657039023', 'Aerosoft GmbH ', 36, 'https://s2.gaming-cdn.com/img/products/12343/pcover/12343.jpg?v=1656429910'),
(8, 1, 3, 'beyond the wire', 'Beyond The Wire is a large-scale multiplayer first-person shooter immersing players in the frantic and bloody Western Front of the Great War. Utilizing both period-appropriate guns and a more tactical close-quarters melee combat system, the action in Beyond The Wire is more comprehensive than anything seen in a WW1 game to date', 90, 3.12, '2022-08-31', 'https://i.ibb.co/DwxVYy1/beyond-the-wire.jpg', 'https://www.instant-gaming.com/videos/products/7788/800x450/beyond-the-wire-pc-jeu-steam-preview.webm?v=1657371765', 'offworld Industries ', 13, 'https://s1.gaming-cdn.com/img/products/7788/pcover/7788.jpg?v=1652282218'),
(9, 1, 7, 'builder simulator', 'Builder Simulator est un jeu pour ceux dont le plus grand rêve a toujours été de construire leur propre maison à partir de rien. Préparez votre plan, achetez les matériaux nécessaires, et construisez une résidence parfaite brique par brique. Cela sera-t-il une tâche facile ? Au début, oui ! Après tout, vous n\'êtes qu\'un débutant dans cette industrie sérieuse qu\'est la construction. Un tutoriel spécialement conçu vous guidera pas à pas dans les péripéties de la construction. Cependant, plus vous acquerrez de l\'expérience, plus les défis deviendront complexes.', 36, 12.49, '2022-06-09', 'https://i.ibb.co/k18n8Yt/builder-simulator.jpg', 'https://www.instant-gaming.com/videos/products/11606/800x450/builder-simulator-pc-jeu-steam-preview.webm?v=1657042097', 'live Motion Games PlayWay S.A', 59, 'https://s3.gaming-cdn.com/img/products/11606/pcover/11606.jpg?v=1655304261'),
(10, 1, 8, 'call of duty modern warfare', 'Call of Duty: Modern Warfare II plonge les joueurs dans un conflit mondial sans précédent et marque le grand retour des Opérateurs emblématiques de la Task Force 141.\r\n\r\nInfinity Ward offre aux fans un gameplay à la pointe la technologie. Le maniement des armes a été amélioré, et le jeu est doté d\'un système d\'IA avancé, ainsi que d\'une nouvelle armurerie et de diverses innovations au niveau du gameplay et des graphismes qui élèvent la franchise vers de nouveaux sommets.\r\n\r\nModern Warfare II vous fera parcourir le monde dans une campagne solo captivante, des combats immersifs en Multijoueur, et un mode de jeu Opérations Spéciales évolué proposant un jeu tactique en coopération.\r\n', 21, 62.99, '2022-10-28', 'https://i.ibb.co/ynbKcvH/call-of-duty-modern-warfare.jpg', 'https://www.instant-gaming.com/videos/products/12827/800x450/call-of-duty-modern-warfare-ii-cross-gen-bundle-xbox-one-xbox-series-x-s-cross-gen-bundle-xbox-one-xbox-series-x-s-jeu-microsoft-store-preview.webm?v=1663603638', 'activision Publishing Inc. ', 120, 'https://s1.gaming-cdn.com/img/products/10404/pcover/10404.jpg?v=1664522580'),
(11, 1, 7, 'Call of the wild the angler', 'Call of the Wild vous proposent une expérience de pêche unique ! Explorez un immense monde ouvert à la recherche du coin de pêche idéal. Naviguez les eaux seul ou avec vos amis, et devenez un maître de la pêche', 52, 14.29, '2022-08-31', 'https://i.ibb.co/4dPCqcL/call-of-the-wild-the-angler.jpg', 'https://www.instant-gaming.com/videos/products/12658/800x450/call-of-the-wild-the-angler-pc-jeu-steam-preview.webm?v=1660429899', 'expansive Worlds ', 46, 'https://s2.gaming-cdn.com/img/products/12658/pcover/12658.jpg?v=1661961243'),
(12, 1, 3, 'cartel tycoon', 'Avec pour décor une Amérique Latine imaginaire des années 1980, Cartel Tycoon raconte une époque où la cocaïne envahit les USA et le monde entier. Des piliers de la drogue riches à outrance règnent sur leurs empires glorieux, créant des centaines d\'emplois. Tandis qu\'une tempête de violence enveloppe ce monde criminel.\r\n', 53, 12.6, '2022-07-26', 'https://i.ibb.co/VYtMykw/cartel-tycoon.jpg', 'https://www.instant-gaming.com/videos/products/8496/800x450/cartel-tycoon-pc-jeu-steam-preview.webm?v=1657117288', 'tinyBuild ', 21, 'https://s1.gaming-cdn.com/img/products/8496/pcover/8496.jpg?v=1652774419'),
(13, 1, 4, 'chivalry 2', 'Retour sur l\'ultime champ de bataille médiéval.\r\nChivalry 2 est un jeu d\'action multijoueur en vue à la première personne inspiré des combats épiques médiévaux. Les joueurs se plongeront dans l\'action de chaque situation emblématique de l\'époque : un affrontement à l\'épée, une tempête de flèches enflammées, un siège de château sans fin, et bien d\'autres encore.', 61, 14.19, '2022-06-12', 'https://i.ibb.co/6HN4zS1/chivalry-2.jpg', 'https://www.instant-gaming.com/videos/products/11411/800x450/chivalry-2-pc-jeu-steam-preview.webm?v=1667925466', 'Tripwire Presents ', 54, 'https://s3.gaming-cdn.com/img/products/11411/pcover/11411.jpg?v=1655388361'),
(14, 1, 4, 'chivalry 2 king s edition ', 'Chivalry 2 est un jeu d\'action multijoueur en vue à la première personne inspiré des combats épiques médiévaux. Les joueurs se plongeront dans l\'action de chaque situation emblématique de l\'époque : un affrontement à l\'épée, une tempête de flèches enflammées, un siège de château sans fin, et bien d\'autres encore.', 50, 26.99, '2022-10-04', 'https://i.ibb.co/FBQDGdN/chivalry-2-king-s-edition-king-s-edition.jpg', 'https://s2.gaming-cdn.com/videos/products/8341/800x450/chivalry-2-special-edition-special-edition-pc-jeu-epic-games-preview.webm?v=1667925466', 'Tripwire Presents ', 31, 'https://s3.gaming-cdn.com/img/products/11411/pcover/11411.jpg?v=1655388361'),
(15, 1, 4, 'chivalry 2 special edition ', 'Retournez au cœur du champ de bataille médiéval ultime\r\nChivalry 2 est un jeu d\'action multijoueur à la première personne inspiré par les combats épiques médiévaux du grand écran. Immergés au cœur de l\'action, les joueurs y revisitent toutes les scènes mythiques liées à cette période : combats d\'épées, ouragans de flèches enflammées, sièges de châteaux titanesques et bien plus encore.\r\n', 69, 13.83, '2022-06-12', 'https://i.ibb.co/0Kx5Hr1/chivalry-2-special-edition-special-edition.jpg', 'https://s3.gaming-cdn.com/videos/products/13130/800x450/chivalry-2-king-s-edition-king-s-edition-pc-jeu-steam-preview.webm?v=1667925466', 'Tripwire Presents ', 98, 'https://s3.gaming-cdn.com/img/products/11411/pcover/11411.jpg?v=1655388361'),
(16, 1, 5, 'f1 22', 'F1 22 pour PC est le vingt-troisième, et selon la rumeur le dernier, de la franchise du jeu de course sous licence tant apprécié. Rejoignez des pilotes et des voitures du monde entier pour vous affronter sur certains des circuits les plus populaires au monde. Il semble que le jeu reviendra sous une forme ou une autre, mais sans la licence officielle de F1, mais à ce stade, les détails sont sommaires', 50, 30.2, '2022-07-01', 'https://i.ibb.co/6Pdj3vS/f1-22.jpg', 'https://www.instant-gaming.com/videos/products/12821/800x450/f1-22-pc-jeu-steam-preview.webm?v=1662631519', 'Electronic Arts', 46, 'https://s3.gaming-cdn.com/img/products/12821/pcover/12821.jpg?v=1662967291'),
(17, 1, 2, 'evil west', 'Le Mal ne dort jamais… mais il peut saigner ! Une sombre menace consume l’Ouest Américain. Vous êtes l’un des derniers agents d’une organisation secrète de chasseurs de vampires, ultime protecteur de l’humanité face aux horreurs qui émergent des ténèbres', 34, 32.99, '2022-11-22', 'https://i.ibb.co/bb0k7tf/evil-west.jpg', 'https://s2.gaming-cdn.com/videos/products/12322/800x450/evil-west-pc-jeu-steam-preview.webm?v=1663603611', 'focus Entertainment', 78, 'https://s2.gaming-cdn.com/img/products/12322/pcover/12322.jpg?v=1669313415'),
(18, 1, 9, 'Dragon ball the breakers', 'DRAGON BALL: THE BREAKERS est un jeu d\'action asymétrique en ligne dans lequel un groupe de sept humains ordinaires tentent de survivre au méchant (un adversaire classique de l\'univers DRAGON BALL comme Cell ou Freezer) qui les pourchasse et évolue pendant la partie en un monstre de puissance inarrêtable. Lui échapper ne sera pas facile… • Échappez-vous en équipe… ou en solo ! ', 16, 16.8, '2022-10-14', 'https://i.ibb.co/2tyHcw5/dragon-ball-the-breakers.jpg', 'https://www.instant-gaming.com/videos/products/10087/800x450/dragon-ball-the-breakers-pc-jeu-steam-preview.webm?v=1657551669', 'BANDAI NAMCO Entertainment', 69, 'https://s2.gaming-cdn.com/img/products/10087/pcover/10087.jpg?v=1661521684'),
(19, 1, 7, 'farming simulator 22 kubota pack', 'Dans le jeu Farming Simulator, vous pouvez conduire un bureau sur roues ! L\'extension Kubota Pack pour Farming Simulator 22 élargit la sélection d\'équipements avec de nouvelles machines agricoles : il y a 11 nouvelles machines fabriquées par Kubota, une multinationale originaire d\'Osaka, au Japon.', 36, 8.37, '2022-07-28', 'https://i.ibb.co/p33dYkn/farming-simulator-22-kubota-pack.jpg', 'https://s2.gaming-cdn.com/videos/products/12400/800x450/farming-simulator-22-kubota-pack-pc-mac-jeu-steam-preview.webm?v=1670350559', 'Giants Software', 35, 'https://s1.gaming-cdn.com/img/products/8676/pcover/8676.jpg?v=1652779172'),
(20, 1, 2, 'marvel s spider man remastered', 'Marvel\'s Spider-Man Remastered pour PC est une version rafraîchie du jeu d\'action et d\'aventure de 2018. Dans ce jeu à la troisième personne, vous incarnez le seigneur de la toile, Spider-Man, qui doit gérer la vie privée de Peter Parker et combattre le méchant surhumain Mister Negative - un nom de méchant s\'il en est ! ', 50, 29.99, '2022-08-12', 'https://i.ibb.co/fxtmdw8/marvel-s-spider-man-miles-morales.jpg', 'https://s1.gaming-cdn.com/videos/products/11907/800x450/marvel-s-spider-man-remastered-pc-jeu-steam-preview.webm?v=1663603302', 'PlayStation PC LLC', 65, 'https://s1.gaming-cdn.com/img/products/11907/pcover/11907.jpg?v=1670938359'),
(21, 1, 4, 'resident evil village gold edition', 'Survie et épouvante atteignent de nouveaux sommets dans le 8e grand titre de la célèbre franchise Resident Evil : Resident Evil Village. Quelques années après les événements effroyables de Resident Evil 7: Biohazard, le jeu encensé par la critique, Ethan Winters et son épouse Mia coulent des jours heureux dans un petit village, loin de leurs anciens cauchemars, loin de se douter que la tragédie guette à nouveau', 30, 34.99, '2022-10-28', 'https://i.ibb.co/vqbcQ5G/resident-evil-village-gold-edition-gold-edition.jpg', 'https://www.instant-gaming.com/videos/products/13107/800x450/resident-evil-village-gold-edition-gold-edition-pc-jeu-steam-preview.webm?v=1667386254', 'CAPCOM Co., Ltd.', 78, 'https://s3.gaming-cdn.com/img/products/6329/pcover/6329.jpg?v=1651568947'),
(22, 1, 9, 'street fighter v', 'Depuis la sortie du jeu en 2016, Street Fighter V s\'est enrichi de nombreux personnages, costumes, niveaux et contenus supplémentaires. Vous avez à présent la possibilité de posséder l\'intégralité de cette collection grâce à Street Fighter V - Champion Edition ! Cette édition comprend l\'intégralité des 2000 éléments de contenu supplémentaires sortis pour le jeu. ', 75, 7.57, '2016-02-16', 'https://i.ibb.co/d7F63nZ/street-fighter-v.jpg', 'https://www.instant-gaming.com/videos/products/6468/800x450/street-fighter-v-champion-edition-champion-edition-pc-jeu-steam-preview.webm?v=1657038038', 'Capcom, Arika', 58, 'https://s1.gaming-cdn.com/img/products/6468/pcover/6468.jpg?v=1649748911'),
(24, 1, 3, 'victoria 3', 'FAÇONNEZ UN AVENIR GRANDIOSEParadox Development Studio vous invite à bâtir votre société idéale dans un 19e siècle tumultueux porteur de transformations. Trouvez un équilibre entre les intérêts divergents de votre société et gagnez votre place au soleil dans Victoria 3, l\'un des jeux les plus attendus de l\'histoire de Paradox.LE SIMULATEUR DE SOCIÉTÉ PAR EXCELLENCEGouvernez des douzaines de nations du monde', 46, 26.99, '2022-10-25', 'https://i.ibb.co/S64zhDM/victoria-3.jpg', 'https://s1.gaming-cdn.com/videos/products/8877/800x450/victoria-3-pc-mac-jeu-steam-preview.webm?v=1663602467', 'Paradox Interactive', 54, 'https://s1.gaming-cdn.com/img/products/8877/pcover/8877.jpg?v=1666774187'),
(25, 1, 7, 'two point campus', 'Two Point Campus pour PC est un jeu de simulation d\'entreprise, qui fait suite au jeu de construction et gestion d\'un hôpital, Two Point Hospital. Dans ce jeu, comme vous pouvez le deviner d\'après son nom, vous devez construire et diriger une université. A propos du jeu Vous commencez le jeu avec une parcelle de terrain vide, ce qui vous permet d\'aménager, de planifier et de construire l\'université selon vos propres goûts. ', 35, 25.99, '2022-08-09', 'https://i.ibb.co/qYTmSsx/two-point-campus.jpg', 'https://s2.gaming-cdn.com/videos/products/8926/800x450/two-point-campus-pc-mac-jeu-steam-europe-preview.webm?v=1657580981', 'SEGA', 45, 'https://s2.gaming-cdn.com/img/products/8926/pcover/8926.jpg?v=1660031226'),
(26, 1, 3, 'triangle strategy', 'Trois grandes puissances s\'affrontent depuis longtemps sur le vaste continent de Norzélia. Le continent porte les cicatrices d\'une longue histoire incluant la Grande Guerre du sel et du fer, résultat d\'une lutte pour le contrôle des ressources en sel et en fer.', 47, 31.99, '2022-10-13', 'https://i.ibb.co/hgcnqfK/triangle-strategy.jpg', 'https://s2.gaming-cdn.com/videos/products/12871/800x450/triangle-strategy-pc-jeu-steam-europe-preview.webm?v=1663603098', 'Square Enix', 56, 'https://s2.gaming-cdn.com/img/products/12871/pcover/12871.jpg?v=1665645472'),
(27, 1, 2, 'the unliving', 'Le royaume des vivants a été profondément corrompu, et la tempête qui approche va changer le monde. Cette tempête, c\'est vous, un puissant nécromancien qui se moque de la mort et mène des légions de trépassés. Prêtres et seigneurs espèrent pouvoir se cacher derrière leurs murs, mais aucun bastion ne pourra les protéger de votre ire. Éliminez tous ceux qui vous barrent la route et transformez-les en pantins pour atteindre la grandeur.', 28, 12.19, '2022-11-09', 'https://i.ibb.co/zfMDRSd/the-unliving.jpg', 'https://s2.gaming-cdn.com/videos/products/9379/800x450/the-unliving-pc-mac-jeu-steam-preview.webm?v=1657555895', 'Team17 Digital', 54, 'https://s2.gaming-cdn.com/img/products/9379/pcover/9379.jpg?v=1668084076'),
(28, 1, 4, 'the quarry', 'Alors que la nuit tombe, les jeunes moniteurs de Hackett\'s Quarry organisent une fête pour célébrer leur dernier jour au camp. Pas d\'enfants. Pas d\'adultes. Pas de règles. Mais les choses vont rapidement mal tourner. Traqués par des individus couverts de sang et une chose bien plus sinistre encore, les adolescents vont vivre une nuit de cauchemar inattendue.', 55, 26.99, '2022-07-10', 'https://i.ibb.co/v35K3Zp/the-quarry.jpg', 'https://s3.gaming-cdn.com/videos/products/10622/800x450/the-quarry-pc-jeu-steam-europe-preview.webm?v=1657037206', '2K Games', 26, 'https://s3.gaming-cdn.com/img/products/10622/pcover/10622.jpg?v=1668769928'),
(29, 1, 3, ' the jackbox party pack 9', 'À propos de The Jackbox Party Pack 9 Voici le neuvième opus de la série de Party Pack à succès que vous connaissez et aimez tous ! Si vous voulez passer du bon temps entre amis, prendre l\'apéro à distance, détendre l\'atmosphère pendant les fêtes, ou si vous cherchez un jeu pour votre prochain stream, The Jackbox Party Pack 9 est là pour pimenter votre vie.', 53, 13.99, '2022-10-20', 'https://i.ibb.co/X3LPSDG/the-jackbox-party-pack-9.jpg', 'https://s1.gaming-cdn.com/videos/products/13098/800x450/the-jackbox-party-pack-9-pc-jeu-steam-preview.webm?v=1666608320', 'Jackbox Games, Inc.', 41, 'https://s1.gaming-cdn.com/img/products/13098/pcover/13098.jpg?v=1666608258'),
(30, 1, 2, 'the entropy centre', 'The Entropy Centre est une aventure époustouflante remplie d\'énigmes dans laquelle vous ramenez des objets dans le temps pour surmonter des obstacles apparemment inamovibles et des défis apparemment insolubles. Manipulez le temps et résolvez des énigmes de manière ingénieuse, en vous rapprochant à chaque fois du cœur d\'une station spatiale colossale en orbite autour de la Terre.', 45, 13.69, '2022-11-03', 'https://i.ibb.co/T80Z61T/the-entropy-centre.jpg', 'https://s2.gaming-cdn.com/videos/products/13108/800x450/the-entropy-centre-pc-jeu-steam-preview.webm?v=1673463422', 'Playstack', 25, 'https://s2.gaming-cdn.com/img/products/13108/pcover/13108.jpg?v=1667904588'),
(31, 1, 3, 'superpower 3', 'Nouvel opus très attendu de la série SuperPower, SuperPower 3 mélange des éléments de stratégie et de gestion pour offrir la simulation de géopolitique la plus complète et exacte à ce jour. Ce nouveau jeu comporte des graphismes modernes, du matériel et de la technologie militaires tels qu’ils existent aujourd’hui, ainsi qu’une technologie EHE/IA améliorée pour une expérience adaptée sur mesure à chaque style de jeu.', 43, 16.69, '2022-10-07', 'https://i.ibb.co/jLSJyNb/superpower-3.jpg', 'https://s1.gaming-cdn.com/videos/products/12375/800x450/superpower-3-pc-jeu-steam-preview.webm?v=1657546033', 'THQ Nordic', 56, 'https://s1.gaming-cdn.com/img/products/12375/pcover/12375.jpg?v=1665474361'),
(32, 1, 9, 'soulstice', 'L\'équilibre des Royaumes Sacrés de Keidas est menacé lorsque des créatures puissantes et féroces appelées « Spectres » traversent le Voile pour envahir la région et ravager le monde des vivants. ', 65, 14.02, '2022-09-20', 'https://i.ibb.co/w4F2vMk/soulstice.jpg', 'https://s2.gaming-cdn.com/videos/products/9163/800x450/soulstice-pc-jeu-steam-preview.webm?v=1657716749', 'Modus Games', 58, 'https://s2.gaming-cdn.com/img/products/9163/pcover/9163.jpg?v=1663659048'),
(33, 1, 2, 'sonic frontiers', 'Sonic, comme jamais auparavant ! Les mondes s’entrechoquent dans cette nouvelle aventure ultra rapide ! Explore un monde époustouflant plein d’action, d’aventure et de mystère tout en affrontant des hordes d’ennemis surpuissants.', 19, 56.99, '2022-11-08', 'https://i.ibb.co/YWVJQSG/sonic-frontiers.jpg', 'https://s1.gaming-cdn.com/videos/products/12924/800x450/sonic-frontiers-digital-deluxe-digital-deluxe-pc-jeu-steam-europe-preview.webm?v=1663603044', 'SEGA', 52, 'https://s1.gaming-cdn.com/img/products/10131/pcover/10131.jpg?v=1668526777'),
(34, 1, 8, 'sniper elite 5', 'Sniper Elite 5 pour PC est un jeu de tir tactique/ furtif à la troisième personne. Les fans de la franchise seront ravis d\'incarner une fois de plus Karl Fairburne, qui, cette fois, se rend en France en 1944, d\'abord pour rencontrer la Résistance française en vue de rentrer chez lui, puis pour être entraîné dans un plan visant à détruire un projet nazi récemment découvert, le \"Projet Kraken\". ', 35, 32.29, '2022-05-26', 'https://i.ibb.co/fCdLv9d/sniper-elite-5.jpg', 'https://s3.gaming-cdn.com/videos/products/9578/800x450/sniper-elite-5-pc-jeu-steam-europe-preview.webm?v=1657041323', 'Rebellion', 45, 'https://s3.gaming-cdn.com/img/products/9578/pcover/9578.jpg?v=1657723244'),
(35, 1, 7, 'pro cycling manager 2022', 'Pro Cycling Manager 2022 vous met dans le costume d’un directeur sportif. Prenez toutes les décisions afin d’amener votre équipe au sommet : recrutement, planification des objectifs et programmes de course, gestion des sponsors, détection des futurs talents, formation, stratégie de course et bien d’autres choses seront sous votre responsabilité. Vous pouvez également créer votre propre coureur en mode Pro Cyclist.', 59, 16.24, '2022-06-09', 'https://i.ibb.co/xDG11rQ/pro-cycling-manager-2022.jpg', 'https://s1.gaming-cdn.com/videos/products/10626/800x450/pro-cycling-manager-2022-pc-jeu-steam-europe-preview.webm?v=1657036632', 'Nacon', 45, 'https://s1.gaming-cdn.com/img/products/10626/pcover/10626.jpg?v=1655304345'),
(36, 1, 2, 'potion permit', 'Les habitants de Moonbury sont très méfiants et préfèrent les méthodes de soin traditionnelles. Jusqu\'au jour où la fille du maire est affligée d\'une maladie face à laquelle même le guérisseur local est impuissant. Ils décident donc de chercher une aide extérieure.', 74, 5.13, '2022-09-22', 'https://i.ibb.co/4NM1B8t/potion-permit.jpg', 'https://s3.gaming-cdn.com/videos/products/7607/800x450/potion-permit-pc-mac-jeu-steam-preview.webm?v=1657582324', 'PQube', 85, 'https://s3.gaming-cdn.com/img/products/7607/pcover/7607.jpg?v=1664035355'),
(37, 2, 4, 'Dead Space', 'Dead Space™, le classique du genre « survival horror » de science-fiction, fait son grand retour. Le jeu a été complètement recréé pour vous offrir une expérience plus réaliste et immersive. Entre le rendu des graphismes spectaculaire, l\'ambiance sonore pleine de suspense et les améliorations des mécaniques de jeu, ce remake sublime l’expérience tout en restant fidèle à la vision captivante du jeu original.', 29, 42.89, '2023-01-27', 'https://s2.gaming-cdn.com/images/products/9094/616x353/dead-space-pc-jeu-origin-cover.jpg?v=1674722203', 'https://www.instant-gaming.com/videos/products/9094/800x450/dead-space-pc-jeu-origin-preview.webm?v=1673528669', 'Electronic Arts', 48, 'https://s2.gaming-cdn.com/img/products/9094/pcover/9094.jpg?v=1674722203'),
(38, 1, 2, 'atomic Heart', 'Bienvenue dans un monde utopique, où la perfection côtoie le merveilleux, et où les humains vivent en harmonie avec leurs serviteurs robots qui suivent leurs ordres avec loyauté et indéfectible enthousiasme', 28, 43.49, '2023-02-20', 'https://s2.gaming-cdn.com/images/products/2587/616x353/atomic-heart-pc-jeu-steam-cover.jpg?v=1676369556', 'https://www.instant-gaming.com/videos/products/2587/800x450/atomic-heart-pc-jeu-steam-preview.webm?v=1663602384', 'Focus Entertainment', 47, 'https://s2.gaming-cdn.com/img/products/2587/pcover/2587.jpg?v=1676369556'),
(39, 1, 2, 'Hogwarts Legacy : L\'Héritage de Poudlard', 'Hogwarts Legacy pour PC est un jeu de rôle d\'action et d\'aventure solo basé sur l\'univers de Harry Potter, dans lequel le joueur incarne un nouveau venu dans le château enchanté tant apprécié des fans des livres et de la franchise cinématographique.', 27, 43.99, '2023-02-10', 'https://s2.gaming-cdn.com/images/products/7072/616x353/hogwarts-legacy-l-heritage-de-poudlard-pc-jeu-steam-europe-cover.jpg?v=1676112832', 'https://s2.gaming-cdn.com/videos/products/7072/800x450/hogwarts-legacy-l-heritage-de-poudlard-pc-jeu-steam-europe-preview.webm?v=1675271201', 'Warner Bros. Games', 96, 'https://s2.gaming-cdn.com/img/products/7072/pcover/7072.jpg?v=1676112832'),
(40, 1, 8, 'Battlefield 2042', 'Battlefield 2042 pour PC est un jeu vidéo de tir à la première personne avec un fort accent sur le multijoueur. Le jeu, le douzième de la série (qui compte également plus de quarante packs d\'extension), se déroule dans un futur assez proche (comme son nom l\'indique), ce qui signifie qu\'il y a beaucoup d\'armes et de gadgets high-tech et futuristes, comme des drones déployables, des tourelles et des chiens robots.', 63, 21.95, '2021-11-19', 'https://s1.gaming-cdn.com/images/products/6690/616x353/battlefield-2042-pc-jeu-origin-cover.jpg?v=1644708475', 'https://s1.gaming-cdn.com/videos/products/6690/800x450/battlefield-2042-pc-jeu-origin-preview.webm?v=1659120872', 'Electronic Arts', 52, 'https://s1.gaming-cdn.com/img/products/6690/pcover/6690.jpg?v=1644708475'),
(41, 3, 2, 'diablo II', 'Un héros doit se lever Diablo, le Seigneur de la Terreur, a été vaincu par un brave héros dans les profondeurs de l’église de Tristram. Mais depuis que ce héros est parti, un Rôdeur l’a remplacé, qui arpente le monde de Sanctuaire en semant mort et destruction sur son passage', 67, 6.6, '2020-06-30', 'https://s1.gaming-cdn.com/images/products/1656/616x353/diablo-ii-pc-jeu-battle-net-cover.jpg?v=1653562116', 'https://s1.gaming-cdn.com/videos/products/1656/800x450/diablo-ii-pc-jeu-battle-net-preview.webm?v=1657044999', 'Blizzard Entertainment', 86, 'https://s1.gaming-cdn.com/img/products/1656/pcover/1656.jpg?v=1653562116'),
(42, 1, 2, 'returnal', 'Brisez le cycle dans ce jeu de tir à la troisième personne récompensé qui apporte ses combats avec déluge de balles infernaux sur PC. L\'odyssée roguelike de Selene arrive avec un ensemble d\'améliorations saisissantes des graphismes et des performances pour garantir un voyage mémorable.', 36, 38.39, '2023-02-15', 'https://s1.gaming-cdn.com/images/products/9666/616x353/returnal-pc-jeu-steam-cover.jpg?v=1676480255', 'https://s1.gaming-cdn.com/videos/products/9666/800x450/returnal-pc-jeu-steam-preview.webm?v=1676455395', 'PlayStation PC LLC', 58, 'https://s1.gaming-cdn.com/img/products/9666/pcover/9666.jpg?v=1676480255'),
(43, 1, 9, 'undisputed', 'La boxe est de retour ! Undisputed est un jeu de boxe authentique soigneusement développé par de véritables fans des sports de combat, aux côtés de professionnels de la boxe. Voici ce que vous pouvez vous attendre à trouver dès le premier jour de l\'accès anticipé : Un jeu de boxe innovant et authentique La boxe n\'est pas qu\'une affaire de coups de poing.', 25, 22.49, '2023-01-31', 'https://s3.gaming-cdn.com/images/products/13421/616x353/undisputed-pc-jeu-steam-cover.jpg?v=1675784868', 'https://s3.gaming-cdn.com/videos/products/13421/800x450/undisputed-pc-jeu-steam-preview.webm?v=1673623283', 'Steel City Interactive', 45, 'https://s3.gaming-cdn.com/img/products/13421/pcover/13421.jpg?v=1675784868'),
(44, 4, 3, 'the Settlers: New Allies', 'The Settlers pour PC est un reboot du jeu original des années 1990. C\'est un jeu de construction à plusieurs niveaux avec des batailles stratégiques en temps réel, qui revient aux racines de la série très populaire, qui comprend 7 jeux principaux, plusieurs spin-offs, et un jeu en ligne : mais rien n\'est sorti entre 2010 et 2022. Ce jeu reprend le meilleur du jeu, en y ajoutant des animations et des graphismes améliorés', 30, 41.99, '2023-02-17', 'https://s1.gaming-cdn.com/images/products/3123/616x353/the-settlers-new-allies-pc-jeu-ubisoft-connect-europe-cover.jpg?v=1676624548', 'https://s1.gaming-cdn.com/videos/products/3123/800x450/the-settlers-new-allies-pc-jeu-ubisoft-connect-europe-preview.webm?v=1657529007', 'Ubisoft', 54, 'https://s1.gaming-cdn.com/img/products/3123/pcover/3123.jpg?v=1676624548'),
(45, 2, 5, 'Need for Speed Unbound', 'Dans Need for Speed™ Unbound, le monde est votre toile d\'expression. Prouvez que vous avez ce qu\'il faut pour remporter le Grand, la course de rue ultime de Lakeshore. Au cours de 4 semaines de courses intenses, gagnez assez d’argent pour participer aux qualifications hebdomadaires, écrasez la concurrence et entrez dans la légende de la course de rue, tout en gardant une longueur d’avance sur la police.', 55, 31.49, '2022-12-02', 'https://s1.gaming-cdn.com/images/products/8490/616x353/need-for-speed-unbound-pc-jeu-origin-cover.jpg?v=1673341589', 'https://s1.gaming-cdn.com/videos/products/8490/800x450/need-for-speed-unbound-pc-jeu-origin-preview.webm?v=1666195383', 'Electronic Arts', 58, 'https://s1.gaming-cdn.com/img/products/8490/pcover/8490.jpg?v=1673341589'),
(46, 1, 7, 'Potion Craft: Alchemist Simulator', 'Fonctionnalités:Des graphismes uniques, inspirés de manuscrits médiévaux et d\'ouvrages médicaux anciens. Des interactions physiques plaisantes avec les ingrédients et le matériel. Un jeu type sandbox avec de nombreux choix disponibles, à vous de trouver le meilleur moyen d\'accomplir des tâches. De la vente de potions aux roturiers de la ville, pour jouer le rôle d\'un noble artisan, d\'une fouine cupide.', 51, 6.09, '2022-12-13', 'https://s3.gaming-cdn.com/images/products/9506/616x353/potion-craft-alchemist-simulator-pc-jeu-steam-cover.jpg?v=1652957475', 'https://s3.gaming-cdn.com/videos/products/9506/800x450/potion-craft-alchemist-simulator-pc-jeu-steam-preview.webm?v=1657097741', 'tinyBuild', 36, 'https://s3.gaming-cdn.com/img/products/9506/pcover/9506.jpg?v=1652957475'),
(47, 1, 4, 'Hi-Fi RUSH', 'Vibrez au rythme de la musique dans la peau de Chai, une rockstar en herbe accompagnée d\'acolytes hétéroclites qui veulent se rebeller contre une mégacorpo cybernétique maléfique, dans un périple ponctué de combats endiablés ! ', 24, 22.79, '2023-02-25', 'https://s2.gaming-cdn.com/images/products/13480/616x353/hi-fi-rush-pc-jeu-steam-cover.jpg?v=1675172984', 'https://s2.gaming-cdn.com/videos/products/13480/800x450/hi-fi-rush-pc-jeu-steam-preview.webm?v=1674729726', 'Bethesda Softworks', 48, 'https://s2.gaming-cdn.com/img/products/13480/pcover/13480.jpg?v=1675172984'),
(48, 1, 4, 'company of Heroes 3 ', 'À propos de ce jeu La légendaire saga stratégique est de retour ! Company of Heroes 3 est le jeu ultime mêlant action, tactiques et esprit de stratégie. À vous de donner des ordres en plein cœur des batailles en temps réel, puis de diriger toute la campagne en tant que Général où chacune de vos décisions aura son importance', 43, 34.49, '2023-02-23', 'https://s1.gaming-cdn.com/images/products/9237/616x353/company-of-heroes-3-pc-jeu-steam-europe-cover.jpg?v=1673341036', 'https://s1.gaming-cdn.com/videos/products/9237/800x450/company-of-heroes-3-pc-jeu-steam-europe-preview.webm?v=1657560842', 'SEGA', 48, 'https://s1.gaming-cdn.com/img/products/9237/pcover/9237.jpg?v=1673341036'),
(49, 1, 4, 'elden Ring', 'Elden Ring pour PC est un jeu d’action RPG (ARPG) écrit par les superstars George R R Martin (l\'auteur de la série de livres Song of Ice and Fire qui a donné naissance à la série télévisée Game of Thrones) et Hidetaka Miyazake (qui est célèbre pour de nombreux jeux vidéo populaires : de la série Souls, à Bloodborne, à Sekiro parmi beaucoup d\'autres).', 42, 34.89, '2022-02-25', 'https://s1.gaming-cdn.com/images/products/4824/616x353/elden-ring-pc-jeu-steam-europe-cover.jpg?v=1650985585', 'https://s1.gaming-cdn.com/videos/products/4824/800x450/elden-ring-pc-jeu-steam-europe-preview.webm?v=1657036138', 'BANDAI NAMCO Entertainment', 52, 'https://s1.gaming-cdn.com/img/products/4824/pcover/4824.jpg?v=1650985585'),
(50, 2, 1, 'fifa 22', 'FIFA 22 pour PC est la trentième version de la franchise de la série de jeux vidéo de simulation de football massivement populaire, qui suit les hauts et les bas de joueurs et d\'équipes du monde entier, en utilisant la capture de mouvements réels des joueurs et en la combinant avec des moteurs graphiques et physiques de pointe pour que chaque jeu vous laisse aussi épuisé que si vous aviez joué pour de vrai !', 72, 16.79, '2021-10-01', 'https://s3.gaming-cdn.com/images/products/9071/616x353/fifa-22-pc-jeu-origin-cover.jpg?v=1644970934', 'https://s3.gaming-cdn.com/videos/products/9071/800x450/fifa-22-pc-jeu-origin-preview.webm?v=1657031418', 'Electronic Arts', 58, 'https://s3.gaming-cdn.com/img/products/9071/pcover/9071.jpg?v=1644970934'),
(51, 2, 7, 'Microsoft Flight Simulator', 'Des avions légers aux gros porteurs en passant par les planeurs et les hélicoptères, pilotez des appareils très détaillés et précis dans Microsoft Flight Simulator Édition 40e anniversaire. ', 33, 46.99, '2022-11-11', 'https://s2.gaming-cdn.com/images/products/13213/616x353/microsoft-flight-simulator-40th-anniversary-edition-pc-xbox-series-x-s-40th-anniversary-edition-pc-xbox-series-x-s-jeu-microsoft-store-cover.jpg?v=1669291580', 'https://s2.gaming-cdn.com/videos/products/13213/800x450/microsoft-flight-simulator-40th-anniversary-edition-pc-xbox-series-x-s-40th-anniversary-edition-pc-xbox-series-x-s-jeu-microsoft-store-preview.webm?v=1673462985', 'Xbox Game Studios', 45, 'https://s3.gaming-cdn.com/img/products/5582/pcover/5582.jpg?v=1675342612');

-- --------------------------------------------------------

--
-- Structure de la table `messenger_messages`
--

DROP TABLE IF EXISTS `messenger_messages`;
CREATE TABLE IF NOT EXISTS `messenger_messages` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `body` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `headers` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `queue_name` varchar(190) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` datetime NOT NULL,
  `available_at` datetime NOT NULL,
  `delivered_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `IDX_75EA56E0FB7336F0` (`queue_name`),
  KEY `IDX_75EA56E0E3BD61CE` (`available_at`),
  KEY `IDX_75EA56E016BA31DB` (`delivered_at`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `platform`
--

DROP TABLE IF EXISTS `platform`;
CREATE TABLE IF NOT EXISTS `platform` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `platform` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `logo` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `platform`
--

INSERT INTO `platform` (`id`, `platform`, `logo`) VALUES
(1, 'Steam', ''),
(2, 'Origine', ''),
(3, 'Battle.net', ''),
(4, 'Ubisoft', '');

-- --------------------------------------------------------

--
-- Structure de la table `type`
--

DROP TABLE IF EXISTS `type`;
CREATE TABLE IF NOT EXISTS `type` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `type` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `type`
--

INSERT INTO `type` (`id`, `type`) VALUES
(1, 'Sport'),
(2, 'Aventure'),
(3, 'Stratégie'),
(4, 'Action'),
(5, 'Course'),
(6, 'RPG'),
(7, 'Simulation'),
(8, 'FPS'),
(9, 'Combat');

-- --------------------------------------------------------

--
-- Structure de la table `user`
--

DROP TABLE IF EXISTS `user`;
CREATE TABLE IF NOT EXISTS `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(180) COLLATE utf8mb4_unicode_ci NOT NULL,
  `roles` json NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UNIQ_8D93D649E7927C74` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `user`
--

INSERT INTO `user` (`id`, `password`, `email`, `roles`) VALUES
(13, '$2y$13$fnQQABWwg93fozLsC9ztseE4ybb9JqzL84bEEhBy335ZJ0.jalYM.', 'thomasbortolato23@gmail.com', '[\"ROLE_ADMIN\"]'),
(18, '$2y$13$TqkEUa3uzEQYKXPYp1aRNuLAvyg18nGl9NcRPJYZjyZSo8o6sjiRa', 'thomasbortolato8@gmail.com', '[]'),
(19, '$2y$13$MeCoyAgBiOIGp0O1xV9udOL3nzl7u9JXuvci4D85yu0aHruHq.WPy', 'thomasbortolato4@gmail.com', '[]'),
(20, '$2y$13$RNK93if7mkc8UYUXBN9GcOBOQ055VPg5ReenKRZHpcVh6g6nD8LNC', 'thomas@thomas.com', '[]');

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `jeux`
--
ALTER TABLE `jeux`
  ADD CONSTRAINT `FK_3755B50D1BD125E3` FOREIGN KEY (`id_type_id`) REFERENCES `type` (`id`),
  ADD CONSTRAINT `FK_3755B50D9A01C10` FOREIGN KEY (`id_plat_id`) REFERENCES `platform` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
