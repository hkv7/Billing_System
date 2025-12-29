package in.harshithkumar.billingsoftware.entity;

import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;
import org.hibernate.annotations.UpdateTimestamp;

import java.math.BigDecimal;
import java.sql.Timestamp;
@Entity
@Table(name = "tbl_items")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class ItemEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(unique = true)
    private String itemId;
    private String name;
    private BigDecimal price;
    private String description;

    @CreationTimestamp
    @Column(updatable = false)
    private Timestamp createdAt;
    @UpdateTimestamp
    private Timestamp updatedAt;

    private String imgUrl;
    @ManyToOne
    @JoinColumn(name = "category_id", nullable = false)// to create a foreign key of category entity table id in this item table
    @OnDelete(action = OnDeleteAction.RESTRICT)// so that when item is deleted, the category is not deleted
    private CategoryEntity category;
}
