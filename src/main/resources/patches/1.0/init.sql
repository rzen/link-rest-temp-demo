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
-- Table `atmloadbuilder`.`part`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `atmloadbuilder`.`part` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `atmloadbuilder`.`entry`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `atmloadbuilder`.`entry` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `entry_type_id` INT NOT NULL,
  `part_id` INT NOT NULL,
  `screen_text` VARCHAR(45) NULL,
  `anchor` VARCHAR(45) NULL,
  `name` VARCHAR(45) NULL DEFAULT 'New Entry',
  `value` VARCHAR(45) NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_entry_entry_type1_idx` (`entry_type_id` ASC),
  INDEX `fk_entry_part1_idx` (`part_id` ASC),
  CONSTRAINT `fk_entry_entry_type1`
    FOREIGN KEY (`entry_type_id`)
    REFERENCES `atmloadbuilder`.`entry_type` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_entry_part1`
    FOREIGN KEY (`part_id`)
    REFERENCES `atmloadbuilder`.`part` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
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
-- Table `atmloadbuilder`.`entry_menu_item`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `atmloadbuilder`.`entry_menu_item` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `goto_feature_menu_id` INT NULL,
  `goto_entry_menu_id` INT NULL,
  `entry_menu_id` INT NOT NULL,
  `entry_id` INT NOT NULL,
  `screen_pos` INT NOT NULL,
  `source` VARCHAR(45) NULL,
  `value` VARCHAR(45) NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_entry_screen_item_entry1_idx` (`entry_id` ASC),
  INDEX `fk_entry_menu_item_entry_menu1_idx` (`entry_menu_id` ASC),
  INDEX `fk_entry_menu_item_feature_menu1_idx` (`goto_feature_menu_id` ASC),
  INDEX `fk_entry_menu_item_entry_menu2_idx` (`goto_entry_menu_id` ASC),
  CONSTRAINT `fk_entry_screen_item_entry1`
    FOREIGN KEY (`entry_id`)
    REFERENCES `atmloadbuilder`.`entry` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
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
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
