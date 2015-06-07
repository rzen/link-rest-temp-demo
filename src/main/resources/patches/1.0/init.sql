DROP DATABASE `atmloadbuilder`;

-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';

-- -----------------------------------------------------
-- Schema atmloadbuilder
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema atmloadbuilder
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `atmloadbuilder` DEFAULT CHARACTER SET utf8 COLLATE utf8_bin ;
USE `atmloadbuilder` ;

-- -----------------------------------------------------
-- Table `atmloadbuilder`.`load`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `atmloadbuilder`.`load` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `description` VARCHAR(45) NULL,
  `type` VARCHAR(45) NOT NULL DEFAULT 'AE',
  PRIMARY KEY (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 1
ROW_FORMAT = DYNAMIC;


-- -----------------------------------------------------
-- Table `atmloadbuilder`.`feature`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `atmloadbuilder`.`feature` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `code` VARCHAR(45) NOT NULL,
  `active` TINYINT(1) NOT NULL DEFAULT 0,
  `name` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `atmloadbuilder`.`entry_type`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `atmloadbuilder`.`entry_type` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `code` VARCHAR(45) NULL,
  `name` VARCHAR(45) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `atmloadbuilder`.`stream`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `atmloadbuilder`.`stream` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `code` VARCHAR(45) NOT NULL,
  `name` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `atmloadbuilder`.`part`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `atmloadbuilder`.`part` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `atmloadbuilder`.`flavor`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `atmloadbuilder`.`flavor` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NULL,
  `feature_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_flavor_feature1_idx` (`feature_id` ASC),
  CONSTRAINT `fk_flavor_feature1`
    FOREIGN KEY (`feature_id`)
    REFERENCES `atmloadbuilder`.`feature` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `atmloadbuilder`.`feature_menu`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `atmloadbuilder`.`feature_menu` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `load_id` INT NOT NULL,
  `stream_id` INT NOT NULL,
  `screen_number` INT NOT NULL DEFAULT 1,
  PRIMARY KEY (`id`),
  INDEX `fk_menu_screen_load1_idx` (`load_id` ASC),
  INDEX `fk_menu_screen_stream1_idx` (`stream_id` ASC),
  CONSTRAINT `fk_menu_screen_load1`
    FOREIGN KEY (`load_id`)
    REFERENCES `atmloadbuilder`.`load` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_menu_screen_stream1`
    FOREIGN KEY (`stream_id`)
    REFERENCES `atmloadbuilder`.`stream` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `atmloadbuilder`.`feature_menu_item`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `atmloadbuilder`.`feature_menu_item` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `active` TINYINT(1) NOT NULL DEFAULT 1,
  `feature_menu_id` INT NOT NULL,
  `feature_id` INT NOT NULL,
  `flavor_id` INT NOT NULL,
  `screen_pos` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_menu_screen_item_feature1_idx` (`feature_id` ASC),
  INDEX `fk_menu_screen_item_flavor1_idx` (`flavor_id` ASC),
  INDEX `fk_feature_menu_item_feature_menu1_idx` (`feature_menu_id` ASC),
  CONSTRAINT `fk_menu_screen_item_feature1`
    FOREIGN KEY (`feature_id`)
    REFERENCES `atmloadbuilder`.`feature` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_menu_screen_item_flavor1`
    FOREIGN KEY (`flavor_id`)
    REFERENCES `atmloadbuilder`.`flavor` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_feature_menu_item_feature_menu1`
    FOREIGN KEY (`feature_menu_id`)
    REFERENCES `atmloadbuilder`.`feature_menu` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `atmloadbuilder`.`entry_menu`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `atmloadbuilder`.`entry_menu` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `screen_number` INT NOT NULL DEFAULT 1,
  `feature_menu_item_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_entry_menu_feature_menu_item1_idx` (`feature_menu_item_id` ASC),
  CONSTRAINT `fk_entry_menu_feature_menu_item1`
    FOREIGN KEY (`feature_menu_item_id`)
    REFERENCES `atmloadbuilder`.`feature_menu_item` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `atmloadbuilder`.`account`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `atmloadbuilder`.`account` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NULL,
  `code` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `atmloadbuilder`.`entry_menu_item`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `atmloadbuilder`.`entry_menu_item` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `entry_type_id` INT NOT NULL,
  `part_id` INT NOT NULL,
  `account_id` INT NOT NULL,
  `goto_feature_menu_id` INT NULL,
  `goto_entry_menu_id` INT NULL,
  `entry_menu_id` INT NOT NULL,
  `screen_pos` INT NOT NULL,
  `source` VARCHAR(45) NULL,
  `anchor` VARCHAR(45) NULL,
  `screen_text` VARCHAR(45) NULL,
  `name` VARCHAR(45) NULL,
  `value` VARCHAR(45) NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_entry_menu_item_entry_menu1_idx` (`entry_menu_id` ASC),
  INDEX `fk_entry_menu_item_feature_menu1_idx` (`goto_feature_menu_id` ASC),
  INDEX `fk_entry_menu_item_entry_menu2_idx` (`goto_entry_menu_id` ASC),
  INDEX `fk_entry_menu_item_account1_idx` (`account_id` ASC),
  INDEX `fk_entry_menu_item_entry_type1_idx` (`entry_type_id` ASC),
  INDEX `fk_entry_menu_item_part1_idx` (`part_id` ASC),
  CONSTRAINT `fk_entry_menu_item_entry_menu1`
    FOREIGN KEY (`entry_menu_id`)
    REFERENCES `atmloadbuilder`.`entry_menu` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_entry_menu_item_feature_menu1`
    FOREIGN KEY (`goto_feature_menu_id`)
    REFERENCES `atmloadbuilder`.`feature_menu` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_entry_menu_item_entry_menu2`
    FOREIGN KEY (`goto_entry_menu_id`)
    REFERENCES `atmloadbuilder`.`entry_menu` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_entry_menu_item_account1`
    FOREIGN KEY (`account_id`)
    REFERENCES `atmloadbuilder`.`account` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_entry_menu_item_entry_type1`
    FOREIGN KEY (`entry_type_id`)
    REFERENCES `atmloadbuilder`.`entry_type` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_entry_menu_item_part1`
    FOREIGN KEY (`part_id`)
    REFERENCES `atmloadbuilder`.`part` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;


INSERT INTO `part` VALUES (1,'Account'),(2,'Amount'),(3,'SubAccount'),(4,'Disclaimer'),(5,'Global'),(6,'Logical');
INSERT INTO `stream` VALUES (1,'OF','Foreign'),(2,'O1','On-Us 1'),(3,'O2','On-Us 2'),(4,'O3','On-Us 3');
INSERT INTO `entry_type` VALUES (1,NULL,'Menus'),(2,NULL,'AccountMenus'),(3,NULL,'Boolean'),(4,NULL,'Text'),(5,NULL,'JSEntry'),(6,NULL,'NextAccountMenus'),(7,NULL,'PrevAccountMenus'),(8,NULL,'AmountMenus'),(9,NULL,'Hidden'),(10,NULL,'Number'),(11,NULL,'Hidden_true_false'),(12,NULL,'Boolean_none_auto_ask');
INSERT INTO `feature` VALUES (1,'PFI',1,'Prompt For Inquiry'),(2,'BI',1,'Balance Inquiry'),(3,'WD',1,'Withdrawal'),(4,'FC',1,'Fast Cash'),(5,'TR',1,'Transfer'),(6,'EP',1,'Electronic Payment'),(7,'ST',1,'Stamps'),(8,'SP',1,'Statement Print'),(9,'CD',1,'Commercial Deposit'),(10,'ED',1,'Envelope Deposit'),(11,'OR',1,'Optional Receipt'),(12,'TC',1,'Transaction Chaining'),(13,'T1D',1,'Track 1 data'),(14,'RCBP',1,'Return Card Before PIN'),(15,'RCBC',1,'Return Card Before Cash'),(16,'CBFC',1,'Card Based Fast Cash'),(17,'EUC',1,'EJ Upload Customization'),(18,'VG',1,'Voice Guidance'),(19,'CB',1,'Cardless Balancing'),(20,'BIM',1,'Balance Inquiry Method'),(21,'EVP',1,'Payment Enclosed'),(22,'PC',1,'Change PIN'),(23,'MCD',1,'Multi-Check Deposit'),(24,'ENHD',1,'Enhanced Deposit'),(25,'BNKN',1,'Bank Name'),(26,'MMDP',1,'Mixed Media Deposit');
INSERT INTO `flavor` VALUES (1,'EPOC Hard-Coded',4),(2,'CM2/RAS Hard-Coded',4),(3,'CM2/RAS Menu-Driven',4),(4,'Enter Amount',3),(5,'Enter Amount with Accounts',3);
