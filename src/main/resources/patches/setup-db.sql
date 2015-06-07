CREATE SCHEMA atmloadbuilder CHARACTER SET utf8;

ALTER SCHEMA atmloadbuilder DEFAULT COLLATE utf8_bin;

CREATE  TABLE IF NOT EXISTS atmloadbuilder.system_patch (
  ID INT(11) NOT NULL AUTO_INCREMENT ,
  NAME VARCHAR(80) NOT NULL ,
  APPLIED_ON DATETIME NOT NULL ,
  COMPLETED_ON DATETIME NULL DEFAULT NULL ,
  PRIMARY KEY (ID) ,
  UNIQUE INDEX NAME_UNIQUE (NAME ASC) )
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8
COLLATE = utf8_bin;