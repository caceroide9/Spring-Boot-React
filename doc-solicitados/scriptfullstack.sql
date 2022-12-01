CREATE SCHEMA IF NOT EXISTS `fullstak` DEFAULT CHARACTER SET utf8 ;
USE `mydb` ;

-- -----------------------------------------------------
-- Table `fullstak`.`publicacion`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `fullstak`.`publicacion` (
  `publicacionid` INT NOT NULL,
  `cantidad_pts` INT NULL,
  `cp_fk` INT NULL,
  `estado` VARCHAR(255) NULL,
  `mensaje` VARCHAR(255) NULL,
  PRIMARY KEY (`publicacionid`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `fullstak`.`tipo_punto`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `fullstak`.`tipo_punto` (
  `idpts` INT NOT NULL AUTO_INCREMENT,
  `estado` VARCHAR(255) NULL,
  `tasa_conversion` FLOAT NULL,
  `tipopunto` VARCHAR(255) NULL,
  PRIMARY KEY (`idpts`))
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;