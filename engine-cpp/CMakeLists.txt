add_library(pkmn_engine SHARED
    src/c_api.cpp
)

target_compile_features(pkmn_engine PUBLIC cxx_std_20)
target_include_directories(pkmn_engine PUBLIC include)

add_executable(pkmn_engine_smoke_test tests/smoke_test.cpp)
target_link_libraries(pkmn_engine_smoke_test PRIVATE pkmn_engine)
add_test(NAME pkmn_engine_smoke_test COMMAND pkmn_engine_smoke_test)
