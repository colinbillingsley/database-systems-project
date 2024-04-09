DELIMITER //

CREATE TRIGGER rso_membership_change AFTER INSERT ON rso_user_joined
FOR EACH ROW
BEGIN
    DECLARE rso_count INT;
    
    SELECT COUNT(*) INTO rso_count
    FROM rso_user_joined
    WHERE rso_id = NEW.rso_id;
    
    IF rso_count >= 5 THEN
        UPDATE rso
        SET status = 'active'
        WHERE rso_id = NEW.rso_id;
    ELSE
        UPDATE rso
        SET status = 'inactive'
        WHERE rso_id = NEW.rso_id;
    END IF;
END//

DELIMITER ;

DELIMITER //

CREATE TRIGGER rso_membership_change_DELETE AFTER DELETE ON rso_user_joined
FOR EACH ROW
BEGIN
    DECLARE rso_count INT;
    
    SELECT COUNT(*) INTO rso_count
    FROM rso_user_joined
    WHERE rso_id = OLD.rso_id;
    
    IF rso_count >= 5 THEN
        UPDATE rso
        SET status = 'active'
        WHERE rso_id = OLD.rso_id;
    ELSE
        UPDATE rso
        SET status = 'inactive'
        WHERE rso_id = OLD.rso_id;
    END IF;
END//

DELIMITER ;
