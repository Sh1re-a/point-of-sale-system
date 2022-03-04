package se.shirwac.pos.system.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import se.shirwac.pos.system.models.Receipt;

public interface ReceiptRepo extends JpaRepository<Receipt, Long> {
}