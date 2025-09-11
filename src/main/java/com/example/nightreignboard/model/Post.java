package com.example.nightreignboard.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name = "Posts")
@NoArgsConstructor
@AllArgsConstructor
@Setter
@Getter
@ToString

public class Post{ 
    
    //Id for user
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    //Board post title
    private String title;

    //Board post content
    private String content;



}