#include "pokesim/c_api.h"

int main() {
    return pkmn_abi_version() == 1 ? 0 : 1;
}
