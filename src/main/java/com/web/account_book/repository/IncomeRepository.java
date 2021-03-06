package com.web.account_book.repository;

import com.web.account_book.model.Income;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface IncomeRepository extends JpaRepository<Income, Long> {

    @Query(value = "SELECT ifnull(sum(income_cost), 0) FROM income where income_date like ?1 and username = ?2", nativeQuery = true)
    int findByIncome_date(String date, String username);
}
