package in.harshithkumar.billingsoftware.service;

import in.harshithkumar.billingsoftware.entity.UserRequest;
import in.harshithkumar.billingsoftware.entity.UserResponse;

import java.util.List;

public interface UserService {

    UserResponse createUser(UserRequest request);

    String getUserRole(String email);

    List<UserResponse> readUsers();

    void deleteUsers(String id);
}
