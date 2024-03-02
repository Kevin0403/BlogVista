package org.example.backend.repository;

import org.example.backend.entities.Blog;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface BlogRepository extends JpaRepository<Blog, Long> {
    @Query("select blog from Blog blog where blog.user = :email")
     List<Blog> findByUser(String email);
}
