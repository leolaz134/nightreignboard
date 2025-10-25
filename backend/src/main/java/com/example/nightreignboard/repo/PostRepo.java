package com.example.nightreignboard.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.nightreignboard.model.Post;
import org.springframework.stereotype.Repository;

@Repository
public interface PostRepo extends JpaRepository<Post, Long>{
    
}
