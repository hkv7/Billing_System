package in.harshithkumar.billingsoftware.service;

import in.harshithkumar.billingsoftware.io.ItemResponse;
import in.harshithkumar.billingsoftware.io.ItemRequest;
import in.harshithkumar.billingsoftware.io.ItemResponse;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

public interface ItemService {

    ItemResponse add(ItemRequest request, MultipartFile file);
    List<ItemResponse> fetchItems();

    void deleteId(String itemId);
}
